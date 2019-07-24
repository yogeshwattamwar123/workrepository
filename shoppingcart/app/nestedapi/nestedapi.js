var express = require("express");

var mongoclient = require("mongodb").MongoClient;

var cors = require("cors");

var bodyparser = require("body-parser");

var url = "mongodb://127.0.0.1:27017";

var app = express();

app.use(bodyparser.urlencoded({
    extended:true
}))

app.use(bodyparser.json());

app.get("/api/getnesteddata", cors(), function(req,res){
    mongoclient.connect(url,function(err,db){
        if(!err){
            var dbo = db.db("nesteddb");
            dbo.collection("nestedarraydemo").find({})
            .toArray(function(err,document){
                if(!err){
                    res.json(document);
                }
            })
        }
    })
});

app.post("/api/postnesteddata",function(req,res){
    let employeedob;
    let employeedepartment;
    let technology;
    let duration;
    for (let subdata of req.body.employeedetails){
        employeedob = subdata.employeedob;
        employeedepartment = subdata.employeedepartment;

        for (let subdata1 of subdata.employeeproject){
            technology = subdata1.technology;
            duration = subdata1.duration;
        }
    }

    

    var data = {
        employeename:req.body.employeename,
        employeesalary:req.body.employeesalary,
        employeedetails:[{
            employeedob:employeedob,
            employeedepartment:employeedepartment,
            employeeproject:[{
            technology:technology,
            duration:duration
            }]
        }]
    };

    console.log();
    mongoclient.connect(url,function(err,db){
        if(!err){
            var dbo = db.db("nesteddb");
            dbo.collection("nestedarraydemo").insertOne(data,function(err,res){
                if(!err){
                    console.log("record inserted");
                }
            })
        }
    })
});

app.delete("/api/deletenesteddata",function(req,res){
    mongoclient.connect(url,function(err,db){
        var dbo = db.db("nesteddb");
        dbo.collection("nestedarraydemo").deleteOne();
    })
})

app.listen(8080);
console.log("server started");