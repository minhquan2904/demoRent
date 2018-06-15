

var mongoose = require("mongoose");

var Schema = mongoose.Schema; 

var statisticSchema = new Schema({
    num_motels:  {type: Number, required: true},
    num_users:   {type: Number, required: true},
    visitors:   {type: Number, default: 0},
    created_at: {type: Date, required: true},
    stopped_at: {type: Date},

},{collection : 'statistics'});

var statistics  = mongoose.model("statistics", statisticSchema);

module.exports = statistics;