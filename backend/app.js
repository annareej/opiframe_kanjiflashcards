const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const kanjiModel = require('./modules/kanji');

let app = express();

mongoose.connect("mongodb://localhost/kanjidatabase").then(
    () => {console.log("MongoDB connection success")},
    (error) => {console.log("MongoDB connection failure:"+error)}
)

app.use(bodyParser.json());

//KANJI API

app.get("/api/kanjis", function(req,res){
    kanjiModel.find({}, function(err,kanjis) {
        if(err){
            return res.status(404).json({"message":"notfound"});
        }
        return res.status(200).json(kanjis)
    });
});

app.post("/api/kanjis", function(req,res){
    let kanji = new kanjiModel({
        "kanji": req.body.kanji,
        "onyomi": req.body.onyomi,
        "kunyomi": req.body.kunyomi,
        "meaning": req.body.meaning,
        "jlpt": req.body.jlpt,
        "strokes": req.body.strokes
    });
    kanji.save(function(err,item){
        if(err){
            return res.status(409).json({"message":err});
        }
        return res.status(200).json({"message":"success"});
    });
});

let port = 3001;

app.listen(port);

console.log("Running in port" + port);