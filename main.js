const chalk = require('chalk')
const { logo, datapoints, logLines } = require('./lib')

function main({ dataOnly }, callback) {
    let lines = 0
    const dataKeys = Object.keys(datapoints)

    /*
     *   Programmatically Determining the offset
     *
     *   Determines the length of the split logo string
     *   in lines. Subtracts from that length the number of
     *   data points to display. Add 1 to the length of
     *   data points to compensate for the 0 based array.
     *
     */
    const offset = logo.split.length - dataKeys.length + 1
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
