const express = require('express');

const routes = express.Router();
const Controllers = require('./app/controllers/');
const AuthMiddleware = require('./app/middleware/oauth');

routes.post('/session', Controllers.SessionController.store);

routes.use(AuthMiddleware);

routes.get('/order', Controllers.OrderController.index);
routes.get('/order/:id', Controllers.OrderController.show);

module.exports = routes;
