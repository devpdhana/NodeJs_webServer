const fs = require('fs')
const path = require('path')

const rs = fs.createReadStream(path.join(__dirname,'Data','secondData.txt'),'utf8')
const ws = fs.createWriteStream(path.join(__dirname,'Data','new_SecondData.txt'))

// rs.on("data",(dataChunk)=>{
//     ws.write(dataChunk)
// })

rs.pipe(ws)