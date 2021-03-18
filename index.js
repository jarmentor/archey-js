#!/usr/bin/env node
;`use strict`
const chalk = require('chalk')
const clear = require('clear')
const { chalkish, log, logo, datapoints } = require('./lib')

clear()
log('\n\n')
function main() {
    const topOffset = 4
    let logoSplit = chalkish`${logo}`.split('\n')
    let num = 0
    logoSplit.slice(0, topOffset).map((line) => log(line))
    Object.keys(datapoints).map(async (key, i) => {
        let data = await datapoints[key]
        log(
            `${logoSplit[num + topOffset]}${chalk.blue(
                key
            )}: ${chalk.whiteBright(data.trim())}`
        )
        num++
        if (num == Object.keys(datapoints).length - 1) {
            logoSplit.slice(num + topOffset, -1).map((line) => log(line))
            log('\n\n')
            process.exit(0)
        }
    })
}
main()
