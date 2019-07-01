require("dotenv").config();
const express = require("express");
const routes = require("./routes");
const cors = require("cors");

class App {
  constructor() {
    this.express = express();
    this.isDev = process.env.NODE_ENV !== "production";
    this.middleware();
    this.routes();
  }
  middleware() {
    this.express.use(express.json());
    this.express.use(cors());
  }
  routes() {
    this.express.use(routes);
  }
}

module.exports = new App().express;
