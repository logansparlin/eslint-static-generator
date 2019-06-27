const fs = require('fs');
const requestPromise = require('request-promise');
const $ = require('cheerio');
const clui = require('clui');
const lintRules = require('./.eslintrc.js').rules;
const Mustache = require('mustache');
const chalk = require('chalk');

const ESLINT_BASE_PATH = 'https://eslint.org/docs/rules'
const OUTPUT_PATH = './dist'

class SiteGenerator {
  constructor() {
    this.rules = Object.keys(lintRules);
    this.spinner = new clui.Spinner("Writing file...");

    if(!this.rules || this.rules.length <= 0) {
      throw new Error('You must provide a properly formatted .eslintrc file')
    }
  }

  async getRuleList() {
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

  async writeFile(filename) {
    const template = fs.readFileSync('./template.mustache', 'utf8')
    const rules = await this.getRuleList()
    const html = await Mustache.render(template, { rules })

    this.startSpinner();
    this.createOutputDirectory()
    fs.writeFile(`${OUTPUT_PATH}/${filename}`, html, err => {
      if(err) {
        return console.log(chalk.red("Couldn't write file."));
      }

      this.stopSpinner();
      console.log(chalk.green(`The html was successfully generated and saved at ${OUTPUT_PATH}/${filename}`));
    })
  }
}

const staticRuleSite = new SiteGenerator();

staticRuleSite.writeFile('index.html');
