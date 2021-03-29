const { chalkish, chalk } = require('./utils')

function Archey({ dataOnly }, datapoints) {
    this.lines = 0
    this.datapoints = datapoints
    this.keys = Object.keys(this.datapoints)
    this.offset = Archey.logo.length - this.keys.length

    if (!dataOnly) {
        let beforeData = Archey.logo.prepare.slice(0, this.offset)
        beforeData.map((line) => console.log(line))
    }
    keys.map(async (point) => {
        let data = await this.datapoints[point]
        let stringParts = [
            !dataOnly ? Archey.logo.prepare[this.lines + this.offset] : '',
            chalk.blue(point),
            chalk.whiteBright(data.trim()),
        ]

        console.log(...stringParts)
        this.lines++

        if (this.lines == keys.length - 1) {
            console.log('\n\n')
            process.exit(0)
        }
    })
}

Archey.logo = {
    string: `
    {green.bold                 •••                 }
    {green.bold                ••••                 }
    {green.bold                •••                  }
    {green.bold        •••••••    •••••••           }
    {yellow.bold      •••••••••••••••••••••          }
    {yellow.bold     •••••••••••••••••••••           }
    {red.bold     ••••••••••••••••••••            }
    {red.bold     ••••••••••••••••••••            }
    {red.bold     •••••••••••••••••••••           }
    {magenta.bold      ••••••••••••••••••••           }
    {magenta.bold      •••••••••••••••••••••          }
    {blue.bold         ••••••••••••••••            }
    {blue.bold          ••••     •••••             }
`,
    get prepare() {
        return chalkish`${this.string}`.split('\n')
    },

    get length() {
        return this.prepare.length
    },
}

module.exports = Archey
