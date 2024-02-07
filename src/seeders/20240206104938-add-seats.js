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
      seatNumber:6,
      flightId:1,
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      seatNumber:7,
      flightId:1,
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      seatNumber:8,
      flightId:1,
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      seatNumber:9,
      flightId:1,
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      seatNumber:10,
      flightId:1,
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
