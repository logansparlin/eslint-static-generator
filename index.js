const fs = require('fs');
const requestPromise = require('request-promise');
const $ = require('cheerio');
const clui = require('clui');
const lintRules = require('./.eslintrc.js').rules;
const Mustache = require('mustache');
const chalk = require('chalk');
const program = require('commander');

const ESLINT_BASE_PATH = 'https://eslint.org/docs/rules'
const OUTPUT_PATH = './dist'

program.version('1.0.0')
  .option('-h, --html', 'Export HTML File')
  .option('-j, --json', 'Export JSON File')
  .parse(process.argv);

class SiteGenerator {
  constructor() {
    this.rules = Object.keys(lintRules);
    this.spinner = new clui.Spinner('Writing file...');

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

  startSpinner(type) {
    this.spinner.start()
  }

  stopSpinner(type) {
    this.spinner.stop()
  }

  createOutputDirectory() {
    if(!fs.existsSync(OUTPUT_PATH)) {
      fs.mkdirSync(OUTPUT_PATH)
    }
  }

  async generateHTMLFile() {
    this.startSpinner();
    const template = fs.readFileSync('./template.mustache', 'utf8')
    const rules = await this.getRuleList()
    const html = await Mustache.render(template, { rules })

    this.createOutputDirectory()
    
    fs.writeFile(`${OUTPUT_PATH}/index.html`, html, 'utf8', err => {
      if(err) {
        return console.log(chalk.red("Couldn't write file."));
      }

      this.stopSpinner();
      console.log(chalk.green(`The html was successfully generated and saved at ${OUTPUT_PATH}/index.html`));
    });
  }

  async generateJSONFile() {
    this.startSpinner();
    const rules = await this.getRuleList()

    this.createOutputDirectory()
    fs.writeFile(`${OUTPUT_PATH}/rules.json`, JSON.stringify({ rules }), 'utf8', err => {
      if(err) {
        return console.log(chalk.red("Couldn't write file."));
      }

      this.stopSpinner();
      console.log(chalk.green(`The JSON was successfully generated and saved at ${OUTPUT_PATH}/rules.json`));
    })
  }
}

const staticRuleSite = new SiteGenerator();

if(program.html) {
  staticRuleSite.generateHTMLFile();
}

if(program.json) {
  staticRuleSite.generateJSONFile();
}
