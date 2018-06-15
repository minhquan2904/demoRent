var mongoose = require("mongoose");

var Schema = mongoose.Schema; 


var voteSchema = new Schema({
   customer_id: String,
   motel_id: String


},{collection : 'votes'});

var votes  = mongoose.model("votes", voteSchema);

module.exports = votes;