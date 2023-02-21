const http = require("http")
const fs = require("fs")
const _ = require("lodash")

const server = http.createServer((req, res) => {
    // lodash
    const num = _.random(0, 20)
    console.log(num)


    const greet = _.once(() => {
        console.log("Hello There")
    })

    greet()
    greet()

    // set header content type 
    res.setHeader("Content-Type", "text/html")

    let path = "../views/"
    switch(req.url){
        case "/":
            path += "index.html"
            res.statusCode = 200
            break
        case "/about":
            path += "about.html";
            res.statusCode = 200
            break
        case "/about-me":
            res.statusCode = 301
            res.setHeader("Location", "/about")
            res.end()
            break
        default:
            path += "404.html" 
            res.statusCode = 404
            break 
    }
    // res.write('<head><link rel = "stylesheet" href = "#"></head>')
    // res.write("<p>Hello, yarodomo </p>")
    // res.write("<p> Hello, Kaido </p>")

    // res.end()

    fs.readFile(path, (err, data) => {
        if(err) {
            console.log(err)
            res.end()
        } else {
            res.end(data);
        }
    })


})

server.listen(8000, "localhost", () => {
    console.log("Listening to request here on port 8000")
})  