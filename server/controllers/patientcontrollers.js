
const db = require('../model/patientmodel');
const pg = require('pg');
const { enable } = require('../server');
const PG_URI = 'postgres://gcavarzr:TVYfCFKtduMoMfGZuzzx4RZ_SaxbFtlR@raja.db.elephantsql.com/gcavarzr';


patientcontroller = {};

patientcontroller.findUser = (req, res, next) => {
  // console.log('ENTERING FIND USER');
  const text = 'SELECT * FROM patients'

  db.query(text,(err, result) => {
    // console.log('ENTERING DB QUERY FIND USER');
    if(err) {
      // console.log('CATCHING FINDING USER ERROR');
      return next({
        log: 'Error finding user',
        status: 400,
        message: { err: "Unable to find user" },
      });
    } else {
        // console.log('ENTERING FINDING USER');
        res.locals.newPatient = [];

        for (let i = 0; i < result.rows.length; i++) {
          res.locals.newPatient.push(Object.assign({}, result.rows[i]));
        }
        // console.log(res.locals.newPatient)
        return next()
    }
  })
};

patientcontroller.createUser = (req, res, next) => {
  console.log('entering createUser');
  const { last_name, first_name, chief_complaint, address} = req.body;
  console.log(last_name, first_name, chief_complaint, address)
  
  // console.log(req.body)

  const text = 'INSERT INTO patients (Last_Name, First_Name, Chief_Complaint, Address, Time_Arrived) VALUES ($1, $2, $3, $4, NOW())'
  const value = [last_name, first_name, chief_complaint, address]

  db.query(text, value, (err, result) => {
    console.log("enterting enable.create")
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
  const { Last_name, first_name, chief_complaint, Address } = req.body;

  const text = 'INSERT INTO patients (lastName, firstName, chief_complaint, Address, time_arrived) VALUES ($1, $2, $3, $4, NOW())'
  const value = [last_name, first_name, chief_complaint, Address]

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
//   Last_name VARCHAR(255) NOT NULL,
//   First_name VARCHAR(255) NOT NULL,
//   Chief_complaint VARCHAR(255) NOT NULL,
//   Address VARCHAR(255) NOT NULL
//   time_arrived TIMESTAMP NOT NULL
// );
