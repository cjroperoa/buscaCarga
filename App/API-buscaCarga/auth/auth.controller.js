const User = require('./auth.dao');
const JWT = require('jsonwebtoken');
const bcrypt = require ('bcryptjs');
const SECRET_KEY = 'secretkey123456';

// metodo de crear un nuevo usuario
exports.createUser = (req, res, next) => {
  const newUser = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  }

  User.create (newUser, (err, user) => {
    if (err) return res.status(500).send('Server error');
    const expiresIn = 24 * 60 * 60;
    const accessToken = JWT.sign({ id: user.id },
      SECRET_KEY, {
        expiresIn: expiresIn
      });
    // respuesta hacia el front
      res.send({ user });
  });
}

exports.loginUser = (req, res, next) => {
  const userData = {
    email: req.body.email,
    password: req.body.password
  }
  // busca en la bd si el usuario existe
  User.findOne({ email: userData.email }, (err, user) => {
    if (err) return res.status(500).send('Server error!');
    // cuando no obtiene el usuario
    if (!user){
      // cuando el email es incorrecto o no existe
      res.status(409).send({ message: 'Something is wrong' }); 
      // best practice -> no establecer cuando la contraseña o el email no es encontrado
    }else {
      const resultPassword = userData.password;
      if (resultPassword) {
        const expiresIn = 24 * 60 * 60;
        const accessToken = JWT.sign({ id: user.id }, SECRET_KEY, { expiresIn: expiresIn });
        res.send({ userData });
      }else {
        // cuando la contraseña es incorrecta
        res.status(409).send({ message: 'Something is wrong' });
      }
    }
  });
}