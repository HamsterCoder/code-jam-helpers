# code-jam-helpers (node.js)

This is a collection of helper functions for JavaScipt for Google Code Jam coding contest. The helpers include:

  * io - read/write input/output in a CodeJam friendly way.
  * dependencies (installs with the package):
    * [BigNumber](https://github.com/MikeMcl/bignumber.js/) library for tackling big inputs.
    

## Installation

```npm install code-jam-helpers```

## Example

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