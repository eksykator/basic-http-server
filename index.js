var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response) {
    
    if (request.method === 'GET' && request.url === '/') {
        fs.readFile('index.html', function(err, data) {
            response.setHeader("Content-Type", "text/html; charset=utf-8");
            response.write(data);
            response.end();
        })
    } else {
        fs.readFile('404.jpg', function(err, data) {
            response.statusCode = 404;
            response.write(data);
            response.end();
        })
    }
});

server.listen(9000);