// const Sequelize = require('sequelize');
// const dbURL = require('./properties').DB;

// const sequelize = new Sequelize('bc-project', 'root','5i5t3m45', {
//   host: 'http://181.49.164.74:3306/',
//   dialect: 'mysql'
// });

// module.exports = () => {
//   sequelize.dialect();
// }

const Sequelize = require('sequelize');
const db = {};
const sequelize = new Sequelize('bc-project', 'root', '5i5t3m45', {
  host: 'http://181.49.164.74:3306/',
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;