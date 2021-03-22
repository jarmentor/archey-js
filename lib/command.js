const { exec } = require('child_process')
module.exports = async (cmd) => {
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
