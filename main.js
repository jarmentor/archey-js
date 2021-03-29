const clear = require('clear')
const {
    format: { chalk, chalkish },
    logo,
    datapoints,
} = require('./lib')

function main({ inline, dataOnly }, offset = 4) {
    let lines = 0
    const logoSplit = chalkish`${logo}`.split('\n')
    const dataKeys = Object.keys(datapoints)

    !inline && clear()
    !dataOnly && logoSplit.slice(0, offset).map((line) => console.log(line))

    dataKeys.map(async (current) => {
        const data = await datapoints[current]

        const [logoString, key, value] = [
            logoSplit[lines + offset],
            chalk.blue(current),
            chalk.whiteBright(data.trim()),
        ]
        console.log(`${!dataOnly ? logoString : ''} ${key}: ${value}`)

        lines++

        if (dataKeys.length - 1 == lines) {
            console.log('\n\n')
            process.exit(0)
        }
    })
}

module.exports = main
