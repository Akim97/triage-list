const Sequelize = require('sequelize');
const db = require('../models/index')

const Doctor = db.define('doctor', {
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});



module.exports = Doctor;