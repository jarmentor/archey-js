const { chalkish, chalk } = require('./utils')

function Archey({ dataOnly }, datapoints) {
    this.lines = 0
    this.keys = Object.keys(datapoints)
    this.offset = Archey.logo.length - this.keys.length
    this.logo = Archey.logo.prepare

    !dataOnly && console.log(this.logo.splice(0, this.offset).join('\n'))

    this.keys.map(async (point) => {
        let data = await datapoints[point]
        console.log(
            dataOnly || Archey.logo.prepare[this.lines + this.offset],
            chalk.blue(point),
            chalk.whiteBright(data.trim())
        )
        this.lines++

        if (this.lines == this.keys.length - 1) {
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
