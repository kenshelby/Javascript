const https = require('https');

https.get('https://scriptedalchemy.medium.com/understanding-webpack-module-federation-a-deep-dive-efe5c55bf366', res => {
  res.on('data', chunk => console.log(chunk.toString()));
  res.on('end', () => console.log('Finished'));
});
