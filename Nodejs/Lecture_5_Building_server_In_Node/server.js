// building server in nodejs
import http from 'http'

const server = http.createServer((req, res)=>{
    res.end("you requested for something...")

})

// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/plain' })
//     res.end('Hello from Node server')
// })

const port = 3000
server.listen(port, () => {
    console.log(`server is running on port ${port}`)
})