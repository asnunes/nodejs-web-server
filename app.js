const http = require('http');
const fs = require('fs')

http.createServer((req, res)=> {
    if (req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(`${__dirname}/index.htm`).pipe(res)
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Not Found');
    }
}).listen(1337, '127.0.0.1');