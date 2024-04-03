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
   await queryInterface.bulkInsert('Airplanes',[
    {
      modelNumber:"Boeing 123",
      capacity:300,
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      modelNumber:"Boeing 276",
      capacity:400,
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      modelNumber:"Airbus A3",
      capacity:340,
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      modelNumber:"Airbus A6",
      capacity:350,
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      modelNumber:"Airbus A320",
      capacity:400,
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
