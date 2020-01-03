const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Addcourse = new Schema({
  courseName: {
    type: String,
    required: true
  },
  courseTiming: {
    type: Array,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  open: {
    type: Boolean,
    required: true
  }
});

const Addcourses = mongoose.model("Addcourse", Addcourse);
module.exports = Addcourses;
