const axios = require('axios');

const instance = axios.create({
  baseURL: 'https://sandbox.moip.com.br',
});

module.exports = instance;
