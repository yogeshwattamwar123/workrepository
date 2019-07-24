var fs = require("fs");

fs.readFile("help.txt",function(err,res){
    if(!err){
        console.log(res.toString());
    }
});

console.log("read complete");