// const http =require('http')

// const server = http.createServer((req,res) => {
//     res.writeHead(200,{'content-type':'text/plain'})
//     res.end('Hello, this is my server')
// });

// server.listen(3000, () => {
//     console.log('server is running on http://localhost:3000')
// })




const http = require('http')

const server = http.createServer((req,res) => {
    res.write('hello Node.js')
    res.end()
})

server.listen(3000,() => {
    console.log('Server is listening on http://localhost:3000')
})