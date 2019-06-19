const sequelize = require('sequelize');
const Schema = sequelize.Schema;

const userSchema = new Schema ({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trim: true
  }
},{
  timestamps: true
});

