

var mongoose = require("mongoose");

var Schema = mongoose.Schema; 

var userSchema = new Schema({
    username:       {type: String, required: true},
    hash:           {type: String, required: true},
    firstname:      {type: String, default: 'default'},
    lastname:       {type: String, default: 'default'}, 
    email:          {type: String, default: '0@0'},
    phone:          {type: Number, default: 0},
    rating:         {
        level:          {type: Number, default: 1},
        exp:            {type: Number, default: 0},
        level_up_at:    {type: Date, default: Date.now()}
    },
    created_at:     {type: Date, default: Date.now()},
    role:           {type: Number, default: 1},
    _motels    : [{ type: Schema.Types.ObjectId, ref: 'Motel' }]
},{collection : 'users'});

var users  = mongoose.model("users", userSchema);

module.exports = users;
