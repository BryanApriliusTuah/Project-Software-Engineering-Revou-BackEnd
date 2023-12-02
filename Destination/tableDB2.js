const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require('../connectDB');

const Destination2 = sequelize.sequelize.define('pesan_ticket_destination', {
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
  rating: {
    type: DataTypes.STRING,
    allowNull: false
  },
  gambar: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
    tableName : 'pesan_ticket_destination',
    timestamps:false
});

module.exports = Destination2