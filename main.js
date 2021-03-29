const clear = require('clear')
const chalk = require('chalk')
const { chalkish, logo, datapoints } = require('./lib')

function main(argv) {
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

module.exports = main
