#!/usr/bin/env node
;`use strict`
const main = require('./main')
const archey = require('./archey')
const clear = require('clear')
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

!argv.inline && clear()

main(argv, () => {
    console.log('\n\n')
    process.exit(0)
})
