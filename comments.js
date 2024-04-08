// Create web server
// Create web server
var http = require('http');
var url = require('url');
var fs = require('fs');

// Create a server
http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    // Read the file
    fs.readFile(filename, function(err, data) {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
        }  
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);
// Run the web server
// Output: http://localhost:8080/comments.html

