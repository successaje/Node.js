const fs = require('fs' )

const readstream = fs.createReadStream("../filesystem/docs/blog.txt", { encoding : "utf8"})
const writestream = fs.createWriteStream("../filesystem/docs/blog3.txt")

readstream.on('data', (chunk) => {
    // if (err){
    //     console.log(err)
    // }
    console.log("------- NEW CHUNK ----------")
    console.log(chunk)
    writestream.write("\n New Chunk \n")
    writestream.write(chunk )
})