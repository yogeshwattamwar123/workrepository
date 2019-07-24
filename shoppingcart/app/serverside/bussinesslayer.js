var express = require("express");
var mongoclient = require("mongodb");
var bodyparser = require("body-parser");

var url = "mongodb://127.0.0.1:27017";

var app = express();

app.use(bodyparser.urlencoded({
    extended:true
}))

app.use(bodyparser.json());

app.get("/api/getProducts",function(req,res){
    mongoclient.connect(url,function(err,db){
        if(!err){
            var dbo = db.db("MyproductsDb");
            dbo.collection("tblproducts").find({}).toArray(function(err,document){
                if(!err){
                    res.send(document);
                }
            })
        }
    })
});

app.post("/api/addProducts",function(req,res){
    var data = {
        Name:req.body.name,
        Price:req.body.price
    };

    mongoclient.connect(url,function(err,db){
        if(!err){
            var dbo = db.db("MyproductsDb");
            dbo.collection("tblproducts").insertOne(data,function(err,document){
                if(!err){
                    res.send("Record Insert");
                    console.log("Record Insert");
                }
            })
        }
    })
})

app.listen(8000);
console.log("Server Started");