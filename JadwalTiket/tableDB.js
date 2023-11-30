const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require('../connectDB');

const Jadwal_Tiket = sequelize.sequelize.define('jadwal_tiket', {
  // Model attributes are defined here
  JadwalTiket_Id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  Gambar: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Jenis_Pesawat: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Waktu_Berangkat: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Waktu_Tiba: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Kelas: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Harga: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Dari: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Ke: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
    tableName : 'jadwal_tiket',
    timestamps:false
});

module.exports = Jadwal_Tiket