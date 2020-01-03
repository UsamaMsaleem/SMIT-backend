const express = require("express");
const router = express.Router();
const Contactus = require("../models/Contactus");


router.use(express.urlencoded({ extended: true }));
router.use(express.json());


router.post("/contactus", function(req, res) {
  const body = req.body;
  const Contact = new Contactus(body);

  Contact.save((err, data) => {
    if (err) {
      res.send(err);
    } else {
      //If no errors, send it back to the client
      res.json({ message: "Contactus ADDED SUCCESSS", data });
    }
  });
});

module.exports = router;
