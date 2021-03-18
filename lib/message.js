const chalk = require('chalk')

const colors = {
    warning: 'yellow',
    info: 'magneta',
    error: 'red',
}

module.exports = {
    info: (message) => chalk`{${colors.info} Info:} ${message}`,
    warning: (message) => chalk`{${colors.warning} Warning:} ${message}`,
    error: (message) => chalk`{${colors.error} Error:} ${message}`,
}
