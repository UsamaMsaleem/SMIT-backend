const express = require("express");
const router = express.Router();
const Applicant = require("../models/Applicant");
require("../Cloudinary/cloudinary");
const upload = require("../Cloudinary/multer");
require("dotenv").config();
const cloudinary = require("cloudinary");
const sharp = require("sharp");

router.use(express.urlencoded({ extended: true }));
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

router.post("/addapplicant", upload.single("image"), async (req, res) => {
  const image = req.body.photo;
  console.log(image);
  cloudinary.v2.uploader.upload(
    image,
    { quality: 50, height: 300, width: 300 },
    (err, result) => {
      if (err) {
        console.log("Error: " + err);
      }
      photo2 = result.secure_url;
      // console.log(photo2);

      const newUser = new Applicant({
        city: req.body.city,
        course: req.body.course,
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

module.exports = router;
