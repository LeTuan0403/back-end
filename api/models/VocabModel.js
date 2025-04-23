const mongoose = require('mongoose')
const vocabSchema = new mongoose.Schema({

    //declare filed name + type +validation
    english : String,
    german:{
        type: String,
        required: [true, "german word can not be empty"],
        minLength: 3,
        maxLength: 30
    }},
    {
        versionKey: false,
        timestamps: true 
    }
)
const vocabModel = mongoose.model("vocabs", vocabSchema)
//Remember to export module (function) at the the end
module.exports = vocabModel