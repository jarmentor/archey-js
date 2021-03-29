#!/usr/bin/env node
;`use strict`

const { datapoints, chalkish } = require('./lib')
const chalk = require('chalk')

let logo = `
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
`

class Archey {
    constructor(logo = ``, datapoints = {}) {
        this.lines = 0
        this.offset = 0
        this.logo = logo
        this.datapoints = datapoints
        this.output = []
        this.init()
    }

    init() {
        this.logo = chalkish`${this.logo}`.split('\n')
        this.offset = this.logo.length - Object.keys(this.datapoints).length
        this.main()
    }

    async assembleLine(point) {
        let line = ''
        const data = await this.datapoints[point]

        const [logoString, key, value] = [
            this.logo[this.lines + this.offset],
            chalk.blue(point),
            chalk.whiteBright(data.trim()),
        ]

        line = `${logoString} ${key} ${value}`
        console.log(line)

        this.lines++
        if (Object.keys(this.datapoints).length - 1 == this.lines) {
            console.log('\n\n')
            process.exit(0)
        }
    }

    static logLines(lines = []) {
        lines.map((line) => console.log(line))
    }

    main() {
        Archey.logLines(this.logo.slice(0, this.offset))
        Object.keys(this.datapoints).map((point) => {
            this.assembleLine(point)
        })
    }
}

const arch = new Archey(logo, datapoints)
