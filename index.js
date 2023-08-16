const http = require('http');
const fs = require('fs');


const homePage = fs.readFile('index.html')

const server = http.createServer((request, response) => {
    console.log(request.url)
    response.writeHead(404)
    response.end(homePage)
})

server.listen(3000)