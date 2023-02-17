const http = require("http")

const server = http.createServer((req, res) => {
    console.log("Request made")
})

server.listen(8000, "localhost", () => {
    console.log("Listening to request here on port 8000")
})