// const sequelize = require('sequelize');
// const Schema = sequelize.Schema;

// const userSchema = new Schema ({
//   name: {
//     type: String,
//     required: true,
//     trim: true
//   },
//   email: {
//     type: String,
//     required: true,
//     trim: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//     trim: true
//   }
// },{
//   timestamps: true
// });

const Sequelize = require('sequelize');
const db = require('../config/db');

module.exports = db.sequelize.define(
  'user',
  {
    id: {
      type: Sequelize.SMALLINT,
      primaryKey: true,
      autoIncrement: true
    },
    cedula: {
      type: Sequelize.INTEGER
    },
    nombres: {
      type: Sequelize.STRING
    },
    contraseña: {
      type: Sequelize.STRING
    },
    correo: {
      type: Sequelize.STRING
    }
  },
  {
    timestamps: false
  });
