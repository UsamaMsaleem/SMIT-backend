const express = require("express");
const router = express.Router();
const Applicant = require("../models/Applicant");

router.use(express.urlencoded());

router.use(express.json());
//ook api

// router.post("/addapplicant", function(req, res) {
//   const body = req.body;
//   const newUser = new Applicant(body);
//   newUser
//     .save()
//     .then(() => {
//       res.send({ message: "APPLICANT ADDED SUCCESSS" });
//     })
//     .catch(e => {
//       console.log("e===>", e);
//       res.send({ message: e.message });
//     });
// });

router.post("/addapplicant", function(req, res) {
  const body = req.body;
  const newUser = new Applicant(body);

  newUser.save((err, applicant) => {
    if (err) {
      res.send(err);
    } else {
      //If no errors, send it back to the client
      res.json({ message: "APPLICANT ADDED SUCCESSS", applicant });
    }
  });
});

module.exports = router;
