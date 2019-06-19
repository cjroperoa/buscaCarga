const Sequelize = require('sequelize');
const dbURL = require('./properties').DB;

const sequelize = new Sequelize('bc-project', 'root','5i5t3m45', {
  host: 'http://181.49.164.74/',
  dialect: 'mysql'
});

module.exports = () => {
  sequelize.connec
}