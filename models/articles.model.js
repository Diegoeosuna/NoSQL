const { Schema, model } = require('mongoose')

const ArticleSchema = new Schema({
    nombre:{
        type: String,
        require: true
    },
    precio:{
        type: Number,
        require: true
    },
    existencias:{
        type: Number,
        require:true
    },
    state:{
        type:Boolean,
        default:true
    }
})

module.exports = model('Article', ArticleSchema);