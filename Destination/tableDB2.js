const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require('../connectDB');

const Destination2 = sequelize.sequelize.define('pesan_ticket_destination2', {
  // Model attributes are defined here
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nama: {
    type: DataTypes.STRING,
    allowNull: false
  },
  gambar: {
    type: DataTypes.STRING,
    allowNull: false
  },
  checkin: {
    type: DataTypes.STRING,
    allowNull: false
  },
  checkout: {
    type: DataTypes.STRING,
    allowNull: false
  },
  room: {
    type: DataTypes.STRING,
    allowNull: false
  },
  pay: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
    tableName : 'pesan_ticket_destination2',
    timestamps:false
});

module.exports = Destination2