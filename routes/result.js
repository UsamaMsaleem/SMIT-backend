const express = require("express");
const router = express.Router();
const Result = require("../models/Result");

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.post("/result", function(req, res) {
  const body = req.body;
  const result = new Result(body);

  result.save((err, data) => {
    if (err) {
      res.send(err);
    } else {
      //If no errors, send it back to the client
      res.json({ message: "Result ADDED SUCCESSS", data });
    }
  });
});

module.exports = router;
