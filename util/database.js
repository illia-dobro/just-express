const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'user', {
  dialect: 'mysql',
  host: 'localhost',
});

module.exports = sequelize;
