const { write } = require('fs')
const http = require('http')

const port = process.argv[2]

const server = http.createServer((req, res) => {
    res.statusCode = 200
    //console.log(req.method)
    if(req.method == 'GET'){
        res.write('<h1>Hello, World!</h1>')
    }
    else if(req.method == 'POST'){
        res.write('<h1>Heinsenberg</h1>')
    }
    /*res.setHeader('Content-Type', 'text/html')
    res.end('<h1>Hello, World!</h1>')*/
    res.end()
})

server.listen(port, () => {
    console.log(`Server running at port ${port}`)
})
