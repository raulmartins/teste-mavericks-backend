const axios = require('axios');

const instance = axios.create({
  baseURL: 'https://connect-sandbox.moip.com.br',
});

module.exports = instance;
