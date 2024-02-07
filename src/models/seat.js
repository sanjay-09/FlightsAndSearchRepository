'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Seat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Flights,{
        foreignKey:"flightId",
        onDelete:"CASCADE"
      })
    }
  }
  Seat.init({
    seatNumber: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    flightId: {
     type:DataTypes.INTEGER,
     allowNull:false
    },
    reminderExpiryTime: {
     type: DataTypes.DATE
    },
    status:{
      type:DataTypes.STRING,
      defaultValue:"false"

    },
    isBooked:{
      type:DataTypes.STRING,
      defaultValue:"false"
    }
  }, {
    sequelize,
    modelName: 'Seat',
  });
  return Seat;
};