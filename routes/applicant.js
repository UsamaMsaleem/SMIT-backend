const express = require("express");
const router = express.Router();
const Applicant = require("../models/Applicant");

router.use(express.urlencoded());

router.use(express.json());

router.post("/addapplicant", function(req, res) {
  const body = req.body;
  const newUser = new Applicant(body);
  newUser
    .save()
    .then(() => {
      res.send({ message: "APPLICANT ADDED SUCCESSS" });
    })
    .catch(e => {
      console.log("e===>", e);
      res.send({ message: e.message });
    });
});

module.exports = router;
