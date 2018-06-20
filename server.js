const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient

var url = "mongodb://localhost:27017/";
app.use(express.static('static'));

app.get("/",function(req,res){
    res.sendFile(__dirname +"/index.html");
});

app.get("/personne", function (req, res){
    var info = "";
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("Idriss");
        dbo.collection("personnages").find({}).toArray(function (err, result) {
            if (err) throw err;
            console.log(result);
            info = result;
            res.send(result);
            db.close();
        });
    })
});


app.listen(3008);