const express = require("express");
const router = express.Router();
const Addcourses = require("../models/Addcourse");

router.use(express.urlencoded());

router.use(express.json());

router.post("/addnewcourse", function(req, res) {
  const body = req.body;
  const newcourse = new Addcourses(body);

  newcourse
    .save()
    .then(() => {
      res.send({ message: "COURSE ADDED SUCCESSS" });
    })
    .catch(e => {
      console.log("e===>", e);
      res.send({ message: e.message });
    });
});

module.exports = router;
