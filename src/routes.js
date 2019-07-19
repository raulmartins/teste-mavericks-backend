const express = require('express');

const routes = express.Router();
const Controllers = require('./app/controllers/');

routes.post('/session', Controllers.SessionController.store);
routes.get('/order', Controllers.OrderController.index);
routes.get('/order/:id', Controllers.OrderController.show);

module.exports = routes;
