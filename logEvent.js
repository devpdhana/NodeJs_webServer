const {format} = require("date-fns");
const path = require('path')
const {v4: uuid} = require('uuid')
const fs = require('fs')
const fsPromises = require('fs').promises

const logEvent = async (message) => {
    const date = `${format(new Date(), "ddMMyyy HH:mm:ss")}`;
    const logItem = `${date}\t${uuid()}\t${message}\n`;
    try {
        if (!fs.existsSync(path.join(__dirname,'logs'))) {
          await fsPromises.mkdir(path.join(__dirname, "logs"));
          console.log("directory created...");
        }
        await fsPromises.appendFile(path.join(__dirname,'logs','logEvents.txt'),logItem)
    } catch (error) {
        console.error(error)
    }
};

module.exports = logEvent
