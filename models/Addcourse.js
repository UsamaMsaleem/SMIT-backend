const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Addcourse = new Schema({
  course: {
    type: String,
    required: true
  }
});

const Addcourses = mongoose.model("Addcourse", Addcourse);
module.exports = Addcourses;
