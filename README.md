# code-jam-helpers (node.js)

This is a collection of helper functions for JavaScipt for Google Code Jam coding contest. The helpers include:

  * io - read/write input/output in a CodeJam friendly way.
  * IMPOSSIBLE constant
  * dependencies (installs with the package):
    * [BigNumber](https://github.com/MikeMcl/bignumber.js/) library for tackling big inputs.
    

## Installation

```npm install code-jam-helpers```

## Input

Input is expected to have Linux style line endings `'\n'`. Watch out for the extra empty line that sometimes appears in input.

## Examples

### Using for loop for fixed sized input

```
var codeJam = require('code-jam-helpers');

function solveTestCase(inputLine) {
    //...
}

function solveProblem(input) {
    input = codeJam.io.decomposeInput(input);

    var output = [];

    for (var i = 0; i < input.n; i += 1) {
        var inputLine = input.lines[i];
        output.push(
            codeJam.io.composeOutput(i, solveTestCase(inputLine))
        );
    }

    return output
        .join('\n');
}

codeJam.io.solve('sample.in', 'sample.out', solveProblem);
```

### Using array iterator for variyng size input (2017-1-b/a)
```
var codeJam = require('code-jam-helpers');

function calculateSpeed(inputLine) {
    //...
}

function solveProblem(input) {
    input = codeJam.io.decomposeInput(input);

    var output = [];

    var i = 0;
    var iterator = input.lines[Symbol.iterator]();

    while (true) {
        var next = iterator.next();

        if (next.done) {
            break;
        }

        var inputLine = next.value
            .split(' ')
            .map(Number);

        var destination = inputLine[0];
        var horsesNumber = inputLine[1];

        var horses = [];

        for (var j = 0; j < horsesNumber; j++) {
            next = iterator.next();

            if (next.done) {
                throw new Error('Unexpected end of input');
            }

            horses.push(next.value);
        }

        output.push(
            codeJam.io.composeOutput(i,
                calculateSpeed(destination, horsesNumber, horses)
            )
        );

        i += 1;
    }

    return output
        .join('\n');
}

codeJam.io.solve('sample.in', 'sample.out', solveProblem);
```