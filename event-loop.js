const fs = require('fs');

fs.readFile('test-file.txt', () => {
  // 4. readFile I/O will be executed.
  console.log('I/O | File read complete');
});
setTimeout(() => console.log('Timer 1 finished', 0)); // 2. Timer will be executed.
setImmediate(() => console.log('Immediate 1 finished')); // 3. setImmediate will be executed.
console.log('Top level code finished'); // 1. Top level code will be executed.
