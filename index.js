/* console.log("Welcome")
console.log("Hello every one...")

const {format} = require('date-fns')
const {v4: uuid} = require('uuid')
console.log(format(new Date(),'ddMMyyyy\tHH:mm:ss'))
console.log(uuid())

const {EventEmitter} = require('node:events')
const logEvent = require('./logEvent')
class MyEmitter extends EventEmitter{}

const myEmiter = new MyEmitter()
myEmiter.on('log',(msg)=>{
    logEvent(msg)
})

myEmiter.emit('log','log event emitted') */

const http = require('http')
const fs = require('fs')
const path = require('path')
const PORT = 3000


const server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'})
    fs.readFile(
      path.join(__dirname, "index.html"),
      (err, data) => {
        if (err) {
          console.error(err);
          res.writeHead(400)
          res.write('Page not found')
        }else {
            res.write(data);
        }
        res.end();
      }
    );


})

server.listen(PORT,(err)=>{
    if (err)
        console.error(err)
    else
        console.log("server running on " + PORT);
})