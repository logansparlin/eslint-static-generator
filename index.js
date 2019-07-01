#!/usr/bin/env node
const fs = require('fs');
const requestPromise = require('request-promise');
const $ = require('cheerio');
const clui = require('clui');
const Mustache = require('mustache');
const chalk = require('chalk');
const program = require('commander');

const ESLINT_BASE_PATH = 'https://eslint.org/docs/rules'
const HTML_FILENAME = 'eslint-rules.html'
const JSON_FILENAME = 'eslint-rules.json'

program.version('1.0.0')
  .option('-h, --html', 'Export HTML File')
  .option('-j, --json', 'Export JSON File')
  .option('-i, --input <input>', 'Path to the eslint rule file')
  .option('-o, --output <output>', 'Path to output files to')
  .parse(process.argv);

const OUTPUT_PATH = program.output || './dist'

if(!program.input) {
  return console.error(chalk.red('You must provide an input (--input) .eslintrc file'));
}

class SiteGenerator {
  constructor() {
    let ruleFile = require(program.input);
    this.rules = ruleFile && Object.keys(ruleFile.rules);
    this.spinner = new clui.Spinner();

    if(!this.rules || this.rules.length <= 0) {
      return console.error(chalk.red('You must provide a properly formatted .eslintrc file'));
    }
  }

  async getRulesList() {
    let rules = []
    for( const rule of this.rules) {
      const html = await requestPromise(`${ESLINT_BASE_PATH}/${rule}`)
      const description = $('h1', html).text()
      const link = `${ESLINT_BASE_PATH}/${rule}`
      rules.push({ rule, link, description })
    }

    return rules;
  }

  startSpinner() {
    if(program.html) {
      this.spinner.message(`Writing ${HTML_FILENAME} and ${JSON_FILENAME} file to ${OUTPUT_PATH}`);
    } else if(!program.html) {
      this.spinner.message(`Writing ${JSON_FILENAME} to ${OUTPUT_PATH}`);
    }

    this.spinner.start()
  }

  stopSpinner() {
    this.spinner.stop()
  }

  createOutputDirectory() {
    if(!fs.existsSync(OUTPUT_PATH)) {
      fs.mkdirSync(OUTPUT_PATH)
    }
  }

  async generateStaticFiles() {
    this.startSpinner();
    const rules = await this.getRulesList();

    this.createOutputDirectory()

    if(program.html) {
      const template = fs.readFileSync('./template.mustache', 'utf8')
      const html = await Mustache.render(template, { rules })
      fs.writeFileSync(`${OUTPUT_PATH}/${HTML_FILENAME}`, html, 'utf8')
    }

    fs.writeFileSync(`${OUTPUT_PATH}/${JSON_FILENAME}`, JSON.stringify({ rules }), 'utf8')

    this.stopSpinner();

    if(program.html) {
      return console.log(chalk.green(`The HTML and JSON files were successfully generated and saved in ${OUTPUT_PATH}`));
    }

    return console.log(chalk.green(`The JSON file was successfully generated and saved at ${OUTPUT_PATH}/${JSON_FILENAME}`));
  }
}

const staticRuleSite = new SiteGenerator();

staticRuleSite.generateStaticFiles();
