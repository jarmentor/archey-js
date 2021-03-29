const { exec } = require('child_process')
const chalk = require('chalk')
function chalkish([raw, ...parts], ...substitutions) {
    let resultsRaw = []
    let resultsCooked = []

    for (let i = 0; i < parts.length; i++) {
        resultsRaw.push(raw[i])
        resultsCooked.push(parts[i])

        if (i < substitutions.length) {
            resultsRaw.push(substitutions[i])
            resultsCooked.push(substitutions[i])
        }
    }

    /*
     *  Now that we have all the template parts and the value substitutions from the
     *  original string, we can build the SINGLE value that we pass onto chalk. This
     *  will cause chalk to evaluate the original template as if it were a static
     *  string (rather than a set of value substitutions).
     */

    let chalkParts = [resultsCooked.join('')]
    chalkParts.raw = [resultsRaw.join('')]
    return chalk(chalkParts)
}

async function command(cmd) {
    return new Promise((resolve, reject) => {
        exec(cmd, (err, stdout, { signal }) => {
            if (err) {
                reject(err)
                return
            }

            if (signal == 'SIGTERM') {
                resolve('Process was killed')
            }

            resolve(stdout)
        })
    })
}

module.exports = { command, chalkish, chalk }
