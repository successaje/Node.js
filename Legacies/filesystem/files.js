const fs = require('fs')

// read
fs.readFile('./docs/blog.txt', (err, data) => {
    if (err) {
        console.log(err)
    }
    console.log(data.toString());
})

console.log("Are you there?")

// write
fs.writeFile('./docs/blog.txt', "Hello World", () => {
    console.log("file was written")
})

fs.writeFile("./docs/blog2.txt", "I from Japan", () => {
    console.log("blog 2 file was written successfully")
})

// Directories

if (!fs.existsSync("./assets")) {

    fs.mkdir("./assets", (err) => {
        if (err) {
            console.log(err)
        }
        console.log("created successfully")
    })
}