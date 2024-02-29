const fs = require('fs');

fs.readFile('test-file.txt', () => {
  console.log('I/O | File read complete');
});
setTimeout(() => console.log('Timer 1 finished', 0));
setImmediate(() => console.log('Immediate 1 finished'));
console.log('Top level code finished');
