const express = require("express");
const router = express.Router();
const Applicant = require("../models/Applicant");
const Addcourse = require("../models/Addcourse");

require("../Cloudinary/cloudinary");
const upload = require("../Cloudinary/multer");
require("dotenv").config();
const cloudinary = require("cloudinary");

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.post("/addapplicant", upload.single("image"), async (req, res) => {
  const image = req.body.photo;
  // console.log(image);
  const rollNo = await getNextSequence(req.body._id);
  cloudinary.v2.uploader.upload(
    image,
    { quality: 50, height: 300, width: 300 },
    (err, result) => {
      if (err) {
        console.log("Error: " + err);
      }
      photo2 = result.secure_url;
      const newUser = new Applicant({
        rollNo: rollNo,
        city: req.body.city,
        course: req.body.course,
        courseLimit: req.body.courseLimit,
        name: req.body.name,
        cnic: req.body.cnic,
        fathername: req.body.fathername,
        fathercnic: req.body.fathercnic,
        emailaddress: req.body.emailaddress,
        mobilenumber: req.body.mobilenumber,
        address: req.body.address,
        dateofbirth: req.body.dateofbirth,
        gender: req.body.gender,
        qualification: req.body.qualification,
        photo: photo2
      });
      newUser.save((err, applicant) => {
        if (err) {
          res.send(err);
        } else {
          //If no errors, send it back to the client
          res.json({ message: "APPLICANT ADDED SUCCESSS", applicant });
        }
      });
    }
  );
});

async function getNextSequence(id) {
  var ret = await Addcourse.findOneAndUpdate(
    { _id: id },
    { $inc: { rollNumSeq: 1 } },
    { upsert: true }
  );
  console.log(ret.rollNumSeq);
  return ret.rollNumSeq;
}

router.post("/updateapplicant", function(req, res) {
  Applicant.update(
    { _id: req.body._id }, // Filter
    { $set: { courseLimit: req.body.courseLimit } }
  )
    .then(course => {
      res.json({ message: "APPLICANT UPDATED SUCCESSS", course });
    })
    .catch(err => {
      res.send(err);
    });
});
module.exports = router;
