const chalk = require('chalk')
function chalkish(parts, ...substitutions) {
    var rawResults = []
    var cookedResults = []

    var partsLength = parts.length
    var substitutionsLength = substitutions.length

    for (var i = 0; i < partsLength; i++) {
        rawResults.push(parts.raw[i])
        cookedResults.push(parts[i])

        if (i < substitutionsLength) {
            rawResults.push(substitutions[i])
            cookedResults.push(substitutions[i])
        }
    }

    // Now that we have all the template parts and the value substitutions from the
    // original string, we can build the SINGLE value that we pass onto chalk. This
    // will cause chalk to evaluate the original template as if it were a static
    // string (rather than a set of value substitutions).
    var chalkParts = [cookedResults.join('')]
    chalkParts.raw = [rawResults.join('')]

    return chalk(chalkParts)
}

module.exports = chalkish
