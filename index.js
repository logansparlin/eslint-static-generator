const fs = require('fs');
const requestPromise = require('request-promise');
const $ = require('cheerio');
const lintRules = require('./.eslintrc.js').rules;

const ESLINT_BASE_PATH = 'https://eslint.org/docs/rules'
const PUBLIC_PATH = '.'

const openingHtml = function() {
  return (
    `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <style>
          .rule-table {
            max-width: 800px;
            margin: 0 auto;
          }
        </style>
      </head>
      <body>
        <table class="rule-table">
          <tr>
            <th>Rule</th>
            <th>Short Description</th>
          </tr>\n`
  )
}

const closingHtml = function() {
  return (
    `\n</table>\n</body>\n</html>`
  )
}

class SiteGenerator {
  constructor() {
    this.rules = Object.keys(lintRules)

    if(!this.rules || this.rules.length <= 0) {
      throw new Error('You must provide a properly formatted .eslintrc file')
    }
  }

  async generateHTML() {
    let nodes = []
    for( const rule of this.rules) {
      const html = await requestPromise(`${ESLINT_BASE_PATH}/${rule}`)
      const description = $('h1', html).text()
      nodes.push(
        `<tr class="rule-row">
          <td><a href="${ESLINT_BASE_PATH}/${rule}" target="_blank">${rule}</a></td>
          <td class="description">${description}</td>
        </tr>`
      )
    }

    return nodes.join('\n')
  }

  async writeFile(filename) {
    console.log('Writing file...')
    const bodyHTML = await this.generateHTML()
    const html = await `${openingHtml()} ${bodyHTML} ${closingHtml()}`
    fs.writeFile(`${PUBLIC_PATH}/${filename}`, html, err => {
      if(err) {
        return console.error("Couldn't write file.")
      }

      console.log(`The html was successfully generated and saved at ${PUBLIC_PATH}/${filename}`)
    })
  }
}

const staticRuleSite = new SiteGenerator();

staticRuleSite.writeFile('index.html');
