var http = require('http');
if (!process.env.PORT) {
  throw new Error('process.env.PORT is required!');
}
http.createServer(function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'Access-Control-Allow-Origin': '*'
  });
  res.end('Hello YOFA!');
}).listen(process.env.PORT);
console.log('Server running at http://127.0.0.1:'+process.env.PORT+'/');


