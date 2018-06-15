var mongoose = require("mongoose");

var Schema = mongoose.Schema; 

var notebookSchema = new Schema({
   student_code: String,
   firstname: String,
   lastname: String,
   sx: String,
   birthday: String,
   join_date: String,
   join_place: String,
   year: Number,
   faculty: String,
   major: String,
   s_class: String,
   save_place: String


},{collection : 'notebooks'});

var notebooks  = mongoose.model("notebooks", notebookSchema);

module.exports = notebooks;