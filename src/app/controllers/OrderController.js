const axios = require('../config/api');

class OrderController {
  async index(req, res) {
    try {
      const response = await axios.get('/v2/orders');
      const { orders } = response.data;
      res.json(orders);
    } catch (err) {
      res.status(401).json({ error: 'Token invalid' });
    }
  }

  async show(req, res) {
    const { id } = req.params;
    try {
      const response = await axios.get(`/v2/orders/${id}`);
      res.json(response.data);
    } catch (error) {
      res.status(401).json({ error: 'Token invalid' });
    }
  }
}

module.exports = new OrderController();
