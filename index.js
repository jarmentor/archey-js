#!/usr/bin/env node
;`use strict`
const clear = require('clear')
const chalk = require('chalk')
const { chalkish, logo, datapoints } = require('./lib')
const yargs = require('yargs')

const argv = yargs
    .option('data-only', {
        alias: 'd',
        description: 'Display output without logo',
        type: 'boolean',
        default: false,
    })
    .option('inline', {
        alias: 'i',
        description: 'Do not clear console before output',
        type: 'boolean',
        default: false,
    })
    .version()
    .help()
    .alias('help', 'h')
    .alias('version', 'v').argv

function main() {
    const { inline, dataOnly } = argv
    let num = 0
    const topOffset = 4
    const logoSplit = chalkish`${logo}`.split('\n')

    console.log('\n\n')
    !inline && clear()
    !dataOnly && logoSplit.slice(0, topOffset).map((line) => console.log(line))

    Object.keys(datapoints).map(async (key) => {
        let data = await datapoints[key]
        console.log(
            !dataOnly ? logoSplit[num + topOffset] : '',
            `${chalk.blue(key)}: ${chalk.whiteBright(data.trim())}`
        )
        num++
        if (num == Object.keys(datapoints).length - 1) {
            console.log('\n\n')
            process.exit(0)
        }
    })
}
main()
