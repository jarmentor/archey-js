const { exec } = require('child_process')
const command = async (cmd) => {
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

module.exports = command
