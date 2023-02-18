const http = require("http")

const server = http.createServer((req, res) => {
    console.log(req.url, req.method)
})

server.listen(8000, "localhost", () => {
    console.log("Listening to request here on port 8000")
})  