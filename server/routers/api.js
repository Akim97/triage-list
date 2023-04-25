const express = require('express');
const patientcontroller = require('../controllers/patientcontrollers');

const router = express.Router()


router.get('/',(req, res) => {
    console.log('Successfuly got a GET request');
    res.status(200)
})









module.exports = router;