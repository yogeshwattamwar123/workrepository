var fs = require("fs");
var data = fs.readFileSync("help.txt");
console.log(data.toString());
console.log("read complete");