'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flights extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Seat,{
        foreignKey:"flightId",
      
      })
    }
  }
  Flights.init({
    flightNumber: 
    {
      type:DataTypes.STRING,
      allowNull:false,
      unique:true
    },
    airplaneId: {
      type:DataTypes.INTEGER,
      allowNull:false
    },

    depatureAirportId: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    destinationAirportId: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    arrivalTime: {
   type: DataTypes.DATE,
   allowNull:false
    },
    departureTime: {
      type:DataTypes.DATE,
      allowNull:false
    },
    price:{
      type:DataTypes.INTEGER,
      allowNull:false

    } ,
    boardingGate:{
      type:DataTypes.STRING,
     

    },
    totalSeats:{
      type:DataTypes.INTEGER,
     
    }
  }, {
    sequelize,
    modelName: 'Flights',
  });
  return Flights;
};