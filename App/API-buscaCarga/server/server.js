// 'use strict'
// const authRoutes = require('./../auth/auth.routes')
// const express = require('express');

// const app = express();
// const router = express.Router();
// const port = process.env.PORT || 3000;

// app.listen(port, () => console.log('API server running on port: ' + port));

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());
// app.use(
//    //bodyParser.urlencoded({ extend: true })
// );

const Users = require('../auth/auth.routes');

app.use('/Users', Users);

app.listen(port, () => {
  console.log('Servidor en ejecución en el puerto: ' + port);
});