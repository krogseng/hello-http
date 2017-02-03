// my little server

// import a facts file?
// keep track of clients
const http = require('http');
const url = require('url');
const qs = require('querystring');

const server = http.createServer((req, res) => {
    //kind of like a constructor
    const parsedUrl = url.parse(req.url);
    const query = qs.parse(parsedUrl.query);
    console.log(query);

    if (req.method === 'POST') {
        res.end('not accepting posts at this time')
    } else if (req.method === 'GET') {
        if (query.format === 'text') {
            res.setHeader('Content-Type', 'text/html');
            res.end('hello world!');
        } else {
            res.end('you did not send text');
        }
    } else {
        res.statusCode = 404;
        res.end(`http method ${req.method} is not supported yet`);

    }
});
module.exports = server;