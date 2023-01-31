const http = require('http')
const fs = require('fs');
const { buffer } = require('stream/consumers');


const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title><head>');
        res.write('<body>')
        let data = fs.readFileSync('message.txt', 'utf8', (err, data) => {
            console.log('hi')
            if (err) {
                console.error(err);
                return;
            }
            console.log(data)
        });

        res.write(data);
        res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form>');
        res.write('</body>')
        res.write('</html>');

        return res.end()

    }

    else if (req.url === '/message' && req.method === 'POST') {
        const requestBody = [];

        req.on('data', (chunk) => {
            requestBody.push(chunk);
        })

        req.on('end', () => {
            const parseBody = Buffer.concat(requestBody).toString();
            const message = parseBody.split('=')[1];
            fs.writeFile('message.txt', message, (err, data) => {

                if (err) {
                    console.log(err)
                }

            });
        })

    }

    res.statusCode = 302;
    res.setHeader('Location', '/')
    return res.end();

})



server.listen('3000', () => {
    console.log('server is listening on port 3000')
})