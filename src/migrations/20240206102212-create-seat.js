'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Seats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      seatNumber: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      isBooked:{
        type:Sequelize.STRING,
        defaultValue:"false"
      },
      flightId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:"Flights",
          key:"id",
          as:"flightId"
          
        }
      },
      status:{
        type:Sequelize.STRING,
        defaultValue:"false"
      },
      reminderExpiryTime: {
        type: Sequelize.DATE,
      
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Seats');
  }
};