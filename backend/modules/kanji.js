const mongoose = require("mongoose");

let Schema = mongoose.Schema({
    "kanji":String,
    "onyomi":[String],
    "kunyomi":[String],
    "meaning":[String],
    "jlpt":Number,
    "strokes":Number
});

module.exports = mongoose.model("Kanji",Schema);