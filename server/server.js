const path = require('path');
const express = require('express');

const app = express();

const apiRouter = require('./routers/api');

const PORT = 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRouter);


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