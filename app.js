const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page');
    } else if (req.url === '/about') {
        res.end('Here is our short history');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(`<h1>Oops</h1><p>Can't seem to find the page</p><a href="/">back home</a>`);
    }
});

server.listen(5000, () => {
    console.log('Server is listening on port 5000...');
});
