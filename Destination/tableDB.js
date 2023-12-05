const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require('../connectDB');

const Destination = sequelize.sequelize.define('destination', {
  // Model attributes are defined here
  Destination_Id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  Destinasi: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Rating: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Gambar: {
    type: DataTypes.STRING,
    allowNull: false
  },
  kota: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
    tableName : 'destination',
    timestamps:false
});

module.exports = Destination