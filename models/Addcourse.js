const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Courses = new Schema({
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
  },
  instructions: {
    type: Array,
    required: true
  },
  rollNumStart: {
    type: Number,
    required: true
  },
  rollNumSeq: {
    type: Number,
    required: true
  }
});

const Addcourses = mongoose.model("Courses", Courses);
module.exports = Addcourses;
