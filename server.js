var http = require('http');
if (!process.env.PORT) {
  throw new Error('process.env.PORT is required! 123123123');
}
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!\n');
}).listen(process.env.PORT);
console.log('Server running at http://127.0.0.1:'+process.env.PORT+'/');
console.log('Server running at http://127.0.0.1:'+process.env.PORT+'/');
console.log('Server running at http://127.0.0.1:'+process.env.PORT+'/');
console.log('TESTETESTESTSETes'+process.env.PORT+'/');
