const path = require('path');
const express = require('express');
const cors = require('cors')

const app = express();

const PORT = 3000;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));


const apiRouter = require('./routers/api');


app.use(express.static(path.join(__dirname, '../build')));


app.get('/',(req, res) => {
    console.log(' Successfuly got a GET request Successfuly got a GET request Successfuly got a GET request Successfuly got a GET request Successfuly got a GET request Successfuly got a GET request Successfuly got a GET request Successfuly got a GET requestSuccessfuly got a GET request');
    res.status(200).json(res.locals.newPatient); 
})

app.post('/api/', patientcontroller.createUser, (req, res) => {
    res.status(200)
})

// unknown path error handler
app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));

//catch all error hanlder
app.use((err, req, res, next) => {
    const defaultError = {
        log: 'There was an unknown error',
        status: 500,
        message:{err: "An error occured!"}, 
    }
    const errorObj = Object.assign({}, defaultError, err);
    res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`);
  });


  module.exports = app;

  