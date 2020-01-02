const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Applicant = new Schema({
  city: {
    type: String,
    required: true
  },
  course: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  cnic: {
    type: String,
    required: true
  },
  fathername: {
    type: String,
    required: true
  },
  fathercnic: {
    type: String,
    required: false
  },
  emailaddress: {
    type: String,
    required: true
  },
  mobilenumber: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  dateofbirth: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  qualification: {
    type: String,
    required: true
  },
  photo: {
    type:String,
    required: true
  },
});

const Applicants = mongoose.model("Applicant", Applicant);
module.exports = Applicants;
