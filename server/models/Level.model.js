
var mongoose = require("mongoose");

var Schema = mongoose.Schema; 

var levelSchema = new Schema({
    num: {type: Number, required: true},
    exp: {type: Number, required: true}
},{collection : 'levels'});

var users  = mongoose.model("levels", levelSchema);

module.exports = users;
