// const User = require('../models/patient');
const path = require('path');
const { Patient } = require('../models')

const patientcontroller = {};

patientcontroller.createUser = (req, res, next) => {
  console.log('entering createUser');
  Patient.create({
    lastName: 'Kim',
    firstName: 'Andrew',
    chiefComplaint: 'cough',
    Address: '3 happy lane',
    DOB: '4/3/02',
    timeArrived: '5:50pm',
  })
  .then((result) => {
    console.log('created user');
    return next();
  })
  .catch((error) => {
    return next(
      {
        log: 'Error creating user',
        status: 400,
        message:{err: "Unable to create user"}, 
      }
      );
  })
  };
  
  module.exports = patientcontroller;
