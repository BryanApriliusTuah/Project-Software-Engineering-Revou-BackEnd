const { Sequelize } = require('sequelize');

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('railway', 'root', 'e-F-bbAG-HD5BhBd1c3B1HfGBe-GceaF', {
    host: 'monorail.proxy.rlwy.net',
    dialect: 'mysql',
    port: 35381
    }
);
const connect = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
module.exports = {sequelize,connect}