/**
 * Javascript uses a dynamic policy, not datatypes needed.
 * Variables are camelCase.
 * JS is case-sensitive.
 * Avoid declaring with var.
 * Take care of teh suntax. Spaces between operators/operands.
 */

const PI = 3.14;        // Declares 'true' contances
const maxThreads = 150; // Declares a 'contextual' variable
let counter = 0;        // Declares non-constant 
counter++;

console.log(PI, typeof PI, maxThreads, counter);