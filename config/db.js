const mongoose = require("mongoose");

// connection URI
const mongoURI =
  "mongodb+srv://usama:memon123@cluster0-fklhl.mongodb.net/admision-portal?retryWrites=true&w=majority";

// remove deprecation warning of collection.ensureIndex
mongoose.set("useCreateIndex", true);

// connect to mongodb
mongoose.connect(mongoURI, { useNewUrlParser: true });

module.exports = mongoose;
