#!/usr/bin/env node
;`use strict`
const Archey = require('./archey')
const datapoints = require('./datapoints')
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

if (!argv.inline) {
    clear()
}

Archey(argv, datapoints)
