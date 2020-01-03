const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Contactus = new Schema({

  fullName: {
    type: String,
    required: true
  },
  emailadress: {
    type: String,
    required: true
  },
  number: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  
});

const contactus = mongoose.model("Contactus", Contactus);
module.exports = contactus;
