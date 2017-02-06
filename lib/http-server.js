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

    console.log('parsed url', parsedUrl);
    console.log('qs ', qs);
    // console.log(query);

    const greetingPath = parsedUrl.path.split('?')[0];

    const path = greetingPath.split('/');
    let name = '';
    let greeting = '';

    if (req.method === 'GET') {
        if (path[1] === 'greeting') {
            greeting = 'hello';
            name = 'stranger';
            if (path[2]) { name = path[2]; }
            if (query.salutation) { greeting = query.salutation; }
            //cowsay here
        }
        res.end(`${greeting} ${name}`);
    } else {
        res.end('Please start greeting with "/greeting" or "/fact"');
    }
});
module.exports = server;