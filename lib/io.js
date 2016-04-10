var fs = require('fs');
var codeJam = {};

// IO
/**
 * Composes output for test case i
 * @param {Number} i - test case number starting from 0
 * @param {String} result - stringified result
 * @returns {string}
 */
function composeOutput(i, result) {
    return 'Case #' + (i + 1) + ': ' + result;
}
/**
 * Composes multiline output for test case i
 * @param {Number} i - test case number starting from 0
 * @param {Array} result - array of stringified results each of which will be printed to a new line
 * @returns {string}
 */
function composeMultilineOutput(i, result) {
    return 'Case #' + (i + 1) + ':\n' + result.join('\n');
}

/**
 * Reads the input file synchronously as string
 * @param {String} filename
 * @returns {*}
 */
function readInput(filename) {
    return fs.readFileSync(filename, { encoding: 'utf8' });
}

/**
 * Outputs the answer to file synchronously
 * @param {String} filename
 * @param {String} output
 * @returns {*}
 */
function writeOutput(filename, output) {
    fs.writeFileSync(filename, output, { encoding: 'utf8' });
}

/**
 * Entry point to our code jam programm
 * @param {String} inputFile - input file name
 * @param {String} outputFile - output file name
 * @param {Function} solveCallback - function that takes input and produces output
 */
function solve(inputFile, outputFile, solveCallback) {
    writeOutput(
        outputFile,
        solveCallback(
            readInput(inputFile)
        )
    );
}

/**
 * Return number of testcases and array of remaining input lines.
 * @param {String} input - input string
 * @returns {{n: Number, lines: Array}}
 */
function decomposeInput(input) {
    var lines = input.split('\n');

    return {
        n: parseInt(lines[0], 10),
        lines: lines.slice(1)
    };
}


module.exports = {
    solve: solve,
    readInput: readInput,
    writeOutput: writeOutput,
    composeOutput: composeOutput,
    composeMultilineOutput: composeMultilineOutput,
    decomposeInput: decomposeInput
};
