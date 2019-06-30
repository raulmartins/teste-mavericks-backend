const axios = require("../config/api");

class OrderController {
  async index(req, res) {
    const response = await axios.get("/v2/orders");
    const { orders } = response.data;
    res.json(orders);
  }
}

module.exports = new OrderController();
