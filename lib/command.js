const { exec } = require('child_process')
const log = (msg, ...params) => console.log(msg, ...params)
const command = async (cmd) => {
    return new Promise((resolve, reject) => {
        exec(cmd, (err, stdout, stderr) => {
            if (err) {
                reject(err)
                return
            }
            if (stderr.signal == 'SIGTERM') {
                resolve('Process was killed')
            }
            resolve(stdout)
        })
    })
}

module.exports = { log, command }
