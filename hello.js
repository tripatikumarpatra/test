var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World devops\n');
}).listen(8080, '{{ appprivate_ip }}');
console.log('Server running at http://{{ appprivate_ip }}:8080/');

