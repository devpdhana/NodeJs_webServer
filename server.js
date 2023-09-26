// console.log("Welcome")

const { readFile } = require("fs");
const fs = require("fs");

// const os = require('os')
// import os from 'os'
// console.log(os.version())
// console.log(os.homedir())
// console.log(os.hostname())

// import path from 'path'
// const path = require('path')
// console.log(path)
// console.log(__filename)
// console.log(__dirname)

// console.log(path.dirname(__filename))
// console.log(path.basename(__dirname))
// console.log(path.basename(__filename))
// console.log(path.extname(__filename))

// console.log(path.parse(__filename))
// const math = require('./Math')
// const {add,sub,mul,div} = require('./Math')

// console.log(add(10,20))

//File Systems
const path = require("path");
const fsPromises = require("fs").promises;

const fileOperations = async () => {
  try {
    const data = fsPromises.readFile(
      path.join(__dirname, "Data", "myData.txt"),
      "utf8"
    );
    console.log('reading completed')
    await fsPromises.writeFile(
      path.join(__dirname, "Data", "mySecondData.txt"),
      "I am Dhana"
    );
    console.log("Writing completed...");
    await fsPromises.appendFile(path.join(__dirname,'Data','mySecondData.txt'),'\nDeveloper...')
    console.log('append completd...')

    await fsPromises.rename(path.join(__dirname,'Data','mySecondData.txt'),path.join(__dirname,'Data','secondData.txt'))
    console.log('renaming completed...')

    await fsPromises.unlink(path.join(__dirname,'Data','myData.txt'))
    console.log('Delete completed...')
    // console.log(data)
  } catch (err) {
    console.error(err);
  }
};

fileOperations()
readFile(path.join(__dirname, "Data", "myData.txt"), "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// fs.writeFile(
//   path.join(__dirname, "Data", "mySecondData.txt"),
//   "I am Dhana",
//   (err) => {
//     console.log("Writing completed...");
    /* fs.appendFile(
      path.join(__dirname, "Data", "mySecondData.txt"),
      "\nDeveloper",
      (err) => {
        console.log("appendFile completed....");
        readFile(
          path.join(__dirname, "Data", "mySecondData.txt"),
          "utf8",
          (err, data) => {
            if (err) throw err;
            console.log(data);
          }
        );
      }
    );
  }
);
 */
process.on("uncaughtException", (err) => {
  console.error(`There is an uncaught error : ${err}`);
  process.exit(1);
});
