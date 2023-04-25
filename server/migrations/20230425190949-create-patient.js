'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('patient', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Last_Name: {
        type: Sequelize.STRING
      },
      First_Name: {
        type: Sequelize.STRING
      },
      Chief_Complaint: {
        type: Sequelize.STRING
      },
      Address: {
        type: Sequelize.STRING
      },
      DOB: {
        type: Sequelize.STRING
      },
      Time_Arrived: {
        type: Sequelize.STRING
      },
      Created_At: {
        allowNull: false,
        type: Sequelize.DATE
      },
      Updated_At: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });



    await queryInterface.createTable('doctor', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Last_Name: {
        type: Sequelize.STRING
      },
      First_Name: {
        type: Sequelize.STRING
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTableAll();
  }
};