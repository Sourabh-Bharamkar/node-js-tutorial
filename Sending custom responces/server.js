const http = require('http')

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');

    if(req.url==='/'){
        res.write('<h1>Welcome</h1>')
    }

    else if (req.url === '/home') {
        res.write('<h1>Welcome Home</h1>')
        return res.end()
    }

    else if (req.url === '/about') {
        res.write('<h1>Welcome to about us page</h1>')
        return res.end()
    }

    else if (req.url === '/node') {
        res.write('<h1>Welcome to my node js project</h1>')
        return res.end()
    }

})

server.listen('3000', () => { console.log('server is listening on port 3000') })