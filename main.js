const chalk = require('chalk')
const { logo, datapoints, logLines } = require('./lib')

function main({ dataOnly }, callback, offset = 4) {
    let lines = 0
    const dataKeys = Object.keys(datapoints)
    logLines(logo.split.slice(0, offset))
    dataKeys.map(async (current) => {
        const data = await datapoints[current]

        const [logoString, key, value] = [
            logo.split[lines + offset],
            chalk.blue(current),
            chalk.whiteBright(data.trim()),
        ]

        console.log(`${!dataOnly ? logoString : ''} ${key}: ${value}`)
        lines++
        dataKeys.length - 1 == lines && callback()
    })
}

module.exports = main
