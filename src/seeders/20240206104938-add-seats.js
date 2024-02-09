'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert("Seats",[
    {
      seatNumber:1,
      flightId:4,
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      seatNumber:2,
      flightId:4,
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      seatNumber:3,
      flightId:4,
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      seatNumber:4,
      flightId:4,
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      seatNumber:5,
      flightId:4,
      createdAt:new Date(),
      updatedAt:new Date()
    }
   ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
