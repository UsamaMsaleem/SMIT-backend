const express = require("express");
const router = express.Router();
const Addcourses = require("../models/Addcourse");
const db = require("../config/db");

// router.use(express.urlencoded());
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

//ok api

// router.post("/addnewcourse", function(req, res) {
//   const body = req.body;
//   const newcourse = new Addcourses(body);

//   newcourse
//     .save()
//     .then(() => {
//       res.send({ message: "COURSE ADDED SUCCESSS" });
//     })
//     .catch(e => {
//       console.log("e===>", e);
//       res.send({ message: e.message });
//     });
// });

router.post("/addnewcourse", function(req, res) {
  const body = req.body;
  const newcourse = new Addcourses(body);

  newcourse.save((err, course) => {
    if (err) {
      res.send(err);
    } else {
      //If no errors, send it back to the client
      res.json({ message: "COURSE ADDED SUCCESSS", course });
    }
  });
});


router.post("/updatecourse", function(req, res) {
  Addcourses.update(
    { _id: req.body._id }, // Filter
    { $set: { open: req.body.open, status: req.body.status } }
  )
    .then(course => {
      res.json({ message: "COURSE UPDATED SUCCESSS", course });
    })
    .catch(err => {
      res.send(err);
    });
});

module.exports = router;
