// Two ways of importing

//module.exports
const C = require('./test-module-1'); // Importing module
const Calc = new C(); // creating instance of a class
console.log(Calc.add(2, 4)); // calling the add method in a class

//exports
const calc = require('./test-module-2'); // Importing module
const { add, divide, multiply } = calc; // Importing module using destructuring
console.log(calc.add(3, 6)); // calling the add method in a class
console.log(divide(3, 6)); // calling the add method in a class

require('./caching')();
require('./caching')();
require('./caching')();
