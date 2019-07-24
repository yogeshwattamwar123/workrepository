var mongoclient = require("mongodb").mongoclient;
var url = "mongodb:127:0.0.1:27017";


mongoclient.Connect(url,function(err,db){
    if(!err){
        var dbo = db.db("MyproductsDb");
        dbo.collection("tblproducts").find({}).toArray(function(err,documents){
            if(!err){
                console.log(document);
            }
            else{
                console.log(err);
            }
        })
    }
    else{
        console.log(err);
    }
})