const axios = require("axios");

const instance = axios.create({
  baseURL: "https://sandbox.moip.com.br"
});

instance.defaults.headers.common["Authorization"] = `Basic ${
  process.env.TOKEN_WIRECARD
}`;

module.exports = instance;
