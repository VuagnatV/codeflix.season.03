const http = require('http')

const port = process.argv[2]

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>Hello, World!</h1>')
    //res.write('<h1> sdfsdfs <h1>')
    //res.end
})

server.listen(port, () => {
    console.log(`Server running at port ${port}`)
})

