'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Patient.init({
    id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey:true,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },  
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    chiefComplaint: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Address: {
        type: DataTypes.STRING,
        allowNull: false,
    },     lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    DOB: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    timeArrived: {
        type: DataTypes.STRING,
        allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Patient',
  });
  return Patient;
};