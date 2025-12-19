const fs = require('fs');

setTimeout(() => console.log("timeout 1"), 5000);
setTimeout(() => console.log("timeout 2"), 1000);
setImmediate(() => console.log("setImmediate 1"));

fs.readFile('test.html', () => console.log("finished reading file"));

console.log("line ends here");