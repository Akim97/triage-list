
const db = require('../model/patientmodel');
const pg = require('pg')
const PG_URI = 'postgres://gcavarzr:TVYfCFKtduMoMfGZuzzx4RZ_SaxbFtlR@raja.db.elephantsql.com/gcavarzr';


patientcontroller = {};

patientcontroller.createUser = (req, res, next) => {
  // console.log('entering createUser');
  const { lastName, firstName, chiefComplaint, Address, DOB, timeArrived } = req.body;

  const text = 'INSERT INTO patients (lastName, firstName, chiefComplaint, Address) VALUES ($1, $2, $3, $4)'
  const value = [firstName, lastName, chiefComplaint, Address]
  // const query = {
  //   values: [firstName, lastName, chiefComplaint, Address, DOB, timeArrived],
  // };

  db.query(text, value, (err, result) => {
    if(err) {
      console.log('CATCHING ERROR HERE')
      return next({
        log: 'Error creating user',
        status: 400,
        message: { err: "Unable to create user" },
      });
    } else {
        console.log('ENTERING CREATING USER');
        res.locals.newPatient = result.rows[0];
        console.log(result);
        return next()
    }
  })
};


patientcontroller.deleteUser = (req, res, next) => {
  const { lastName, firstName, chiefComplaint, Address, DOB, timeArrived } = req.body;

  const text = 'INSERT INTO patients (lastName, firstName, chiefComplaint, Address) VALUES ($1, $2, $3, $4)'
  const value = [firstName, lastName, chiefComplaint, Address]

  db.query(text, value, (err, result) => {
    if(err) {
      console.log('DELETE ERROR HERE')
      return next({
        log: 'Error deleting user',
        status: 400,
        message: { err: "Unable to DELETE user" },
      });
    } else {
        console.log('ENTERING DELETE USER');
        res.locals.newPatient = result.rows[0];
        console.log(result);
        return next()
    }
  })
};


const client = new pg.Client(PG_URI)
client.connect((err) => {
  if (err) {
      console.log('error connecting to database')
  }
  console.log('success')
})
  
  module.exports = patientcontroller;



// CREATE TABLE patients (
//   id SERIAL PRIMARY KEY,
//   firstName VARCHAR(255) NOT NULL,
//   lastName VARCHAR(255) NOT NULL,
//   chiefComplaint VARCHAR(255) NOT NULL,
//   address VARCHAR(255) NOT NULL
// );
