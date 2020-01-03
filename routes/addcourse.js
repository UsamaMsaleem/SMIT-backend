const express = require("express");
const router = express.Router();
const Addcourses = require("../models/Addcourse");

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

module.exports = router;
