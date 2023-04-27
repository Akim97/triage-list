const express = require('express');
const patientcontroller = require('../controllers/patientcontrollers');

const router = express.Router()


router.get('/', patientcontroller.findUser, (req, res) => {
    console.log(' Successfuly got a GET request');
    res.status(200).json(res.locals.newPatient)
})

router.post('/', patientcontroller.createUser, (req, res) => {
    console.log(' Successfuly got a POST request');

    res.status(200)
})

module.exports = router;