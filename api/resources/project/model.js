/**
 * Created by enejl on 15. 06. 2016.
 */

const mongoose = require('mongoose');

const  schema = new mongoose.Schema({

    title           : String,
    body            : String,
    imageUrls       : [String],
    link            : String,
    status          : { type:Boolean, default:false},
    author          : String,
    dateCreated     : { type:Date, default: Date.now },
    tags            : [String],
    coverImage      : String

});

mongoose.model('Project', schema);