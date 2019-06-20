// const Users = require('./auth.controller');

// module.exports = (router)=> {
//   router.post('/register', Users.createUser);
//   router.get('./login', Users.loginUser);
//}

const express = require('express');
const users = express.Router();
const cors = require('cors');
const JWT = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const User = require('../auth/auth.model');
users.use(cors());

process.env.SECRET_KEY = 'secret';

// Registro
users.post('/register', (req, res) => {

  const today = new Date();

  const userData = {
    cedula: req.body.cedula,
    nombres: req.body.nombres,
    contraseña: req.body.contraseña,
    correo: req.body.correo
  }

  User.findOne({
    where: {
      correo: req.body.email
    }
  }).then(user => {
      if (!user){
        const hash = bcrypt.hashSync(userData.contraseña, 10);
        userData.contraseña = hash;
        User.create(userData)
          .then(user => {
            let token = JWT.sign(user.dataValues, process.env.SECRET_KEY, {
              expiresIn: 1440
            });
            res.json({ token: token });
          })
          .catch(err => {
            res.send('error: '+ err);
          });
      }else {
        res.json({ error: 'Usuario ya existe' });
      }
    })
    .catch(err =>{
      res.send('error: '+ err);
    });
});

module.exports = users;