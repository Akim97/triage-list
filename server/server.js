const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;
const patientcontroller = require('./controllers/patientcontrollers');



app.use(express.json());

const apiRouter = require('./routers/api');
const db = require('./models');

app.use(express.static(path.join(__dirname, '../build')));

app.get('/api/',(req, res) => {
    console.log(' Successfuly got a GET request Successfuly got a GET request Successfuly got a GET request Successfuly got a GET request Successfuly got a GET request Successfuly got a GET request Successfuly got a GET request Successfuly got a GET requestSuccessfuly got a GET request');
    res.status(200).json('hi')
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

// try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`);
  });


//   db.sync({ force: true });
  
  console.log("All models were synchronized successfully.");

  module.exports = app;


//   INSERT INTO Patients (firstName, lastName, chiefComplaint, Address, DOB, TimeArrived)
// VALUES ('Andrew', 'Kim', 'Cough', '10 Happy Lane', '3/28/97', '4:10pm')
