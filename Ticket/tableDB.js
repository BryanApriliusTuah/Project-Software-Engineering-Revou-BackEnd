const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require('../connectDB');

const ticket = sequelize.sequelize.define('pesan_ticket', {
  // Model attributes are defined here
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  gambar: {
    type: DataTypes.STRING,
    allowNull: false
  },
  nama: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dari: {
    type: DataTypes.STRING,
    allowNull: false
  },
  ke: {
    type: DataTypes.STRING,
    allowNull: false
  },
  waktu: {
    type: DataTypes.STRING,
    allowNull: false
  },
  harga: {
    type: DataTypes.STRING,
    allowNull: false
  },
  kelas: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
    tableName : 'pesan_ticket',
    timestamps:false
});

module.exports = ticket