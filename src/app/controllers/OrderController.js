const axios = require("../config/api");

class OrderController {
  async index(req, res) {
    const response = await axios.get("/v2/orders");
    const { orders } = response.data;
    res.json(orders);
  }

  async show(req, res) {
    const id = req.params.id;
    const response = await axios.get(`/v2/orders/${id}`);
    res.json(response.data);
  }
}

module.exports = new OrderController();
