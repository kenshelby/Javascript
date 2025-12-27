const { Transform } = require("stream");

class UppercaseStream extends Transform {
  _transform(chunk, encoding, callback) {
    const output = chunk.toString().toUpperCase();
    this.push(output);
    callback();
  }
}

process.stdin
  .pipe(new UppercaseStream())
  .pipe(process.stdout);
