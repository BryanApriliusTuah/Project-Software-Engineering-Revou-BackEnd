const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require('../connectDB');

const ContactUs = sequelize.sequelize.define('contactus', {
  // Model attributes are defined here
  ContactUs_Id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  Name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Message: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
    tableName : 'contactus',
    timestamps:false
});

module.exports = ContactUs