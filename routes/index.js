const express = require("express");
const router = express.Router();

router.use("/users", require("./users"));
router.use("/applicant", require("./applicant"));
router.use("/addcourse", require("./addcourse"));


module.exports = router;
