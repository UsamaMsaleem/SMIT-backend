const express = require("express");
const router = express.Router();

router.use("/users", require("./users"));
router.use("/applicant", require("./applicant"));
router.use("/addcourse", require("./addcourse"));
router.use("/contactus", require("./contactus"));
router.use("/result", require("./result"));

module.exports = router;
