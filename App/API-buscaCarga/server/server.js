'use strict'
const authRoutes = require('./../auth/auth.routes')
const express = require('express');

const app = express();
const router = express.Router();
const port = process.env.PORT || 3000;

app.listen(port, () => console.log('API server running on port: ' + port));