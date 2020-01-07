let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server");
// const should = require('should')
let should = chai.should();
chai.use(chaiHttp);

/*
 * Test the /POST route
 */
// describe('/POST addcourse/addnewcourse', () => {
//   it('it should not POST a course', (done) => {
//     let book = {
//       course:"usama"
//     }
//     chai.request(server)
//     .post('/addcourse/addnewcourse')
//     .send(book)
//     .end((err, res) => {
//                   // res.should.have.status(200);
//                   res.status.should.be.equal(200);
//                   // res.should.have.status(400);
//                   // res.body.should.be.a('object');
//                   // res.body.should.have.property('errors');
//                   res.body.errors.should.have.property('course');
//               done();
//             });
//       });

//   });

it("should add an Course on POST", function(done) {
  const obj ={
    courseName: "Designing",
    status:"pass",
    open:"false",
    courseTiming:["monday","tuesday"]
  }
  chai
    .request(server)
    .post("/addcourse/addnewcourse")
    .send(obj)
    .end(function(err, res) {
      should.equal(err, null);
      res.should.have.status(200);
      res.should.be.json;
      // console.log('Line 45 res body', res.body);
      res.body.should.be.a("object");
      res.body.should.have.property("courseName");
      res.body.should.have.property("open");
      res.body.should.have.property("status");
      res.body.should.have.property("courseTiming");

      done();
    });
});

// it("should add an Applicant on POST", function(done) {
//   const obj = {
//     city: "paak",
//     course: "mobile app developer",
//     name: "usasasma",
//     cnic: "1111132332323",
//     fathername: "aa",
//     fathercnic: "32323232323",
//     emailaddress: "usama_saleem@email.com",
//     mobilenumber: "032145687",
//     address: "karachi",
//     dateofbirth: "12-18-2017",
//     gender: "male",
//     qualification: "matric"
//   };
//   chai
//     .request(server)
//     .post("/applicant/addapplicant")
//     .send(obj)
//     .end(function(err, res) {
//       should.equal(err, null);
//       res.should.have.status(200);
//       res.should.be.json;
//       // console.log('Line 45 res body', res.body);
//       res.body.should.be.a("object");
//       // res.body.should.have.property('course');
//       // res.body.course.should.be.a('string');
//       // res.body.course.should.equal('Kale');
//       done();
//     });
// });
