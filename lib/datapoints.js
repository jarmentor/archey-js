const command = require('./command').command
module.exports = {
    user: command(`whoami`),
    hostname: command(`hostname -s`),
    distro: command('sw_vers -productVersion'),
    kernel: command(`uname`),
    uptime: command(`uptime`),
    shell: command('$SHELL'),
    terminal: command('echo $TERM $TERM_PROGRAM'),
    // removes (R) and (TM) from the CPU name so it fits in a standard 80 window
    cpu: command(
        `sysctl -n machdep.cpu.brand_string | awk '$1=$1' | sed 's/([A-Z]\{1,2\})//g'`
    ),
    ram: command('echo $(($(sysctl -n hw.memsize) / 1024 ** 3)) GB'),
    disk: command("df | head -2 | tail -1 | awk '{print $5}'"),
}
