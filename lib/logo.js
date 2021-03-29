const chalkish = require('./chalkish')
module.exports = {
    logoString: `
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
    get split() {
        return chalkish`${this.logoString}`.split('\n')
    },
}
