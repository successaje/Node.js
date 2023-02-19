const http = require("http")
const fs = require(fs);
const fs = require("fs")

const server = http.createServer((req, res) => {
    console.log(req.url, req.method)
    // set header content type 
    res.setHeader("Content-Type", "text/html")
    res.write('<head><link rel = "stylesheet" href = "#"></head>')
    res.write("<p>Hello, yarodomo </p>")
    res.write("<p> Hello, Kaido </p>")

    res.end()
})

server.listen(8000, "localhost", () => {
    console.log("Listening to request here on port 8000")
})  