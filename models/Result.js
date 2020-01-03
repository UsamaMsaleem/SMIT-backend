const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Result = new Schema({
  student: {
    name: String,
    fatherName: String,
    rollno: String,
    cnic: String,
    course: String,
    status: String
  }
});

const result = mongoose.model("Result", Result);
module.exports = result;
