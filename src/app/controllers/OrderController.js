const axios = require("../config/api");

class OrderController {
  async index(req, res) {
    const response = await axios.get("/v2/orders");
    const { orders } = response.data;
    res.json(orders); //paginate(orders, req.query.page);
  }

  async show(req, res) {
    const id = req.params.id;
    const response = await axios.get(`/v2/orders/${id}`);
    res.json(response.data);
  }
}
// function paginate(array, page) {
//   --page;
//   return array.slice(page * 4, (page + 1) * 4);
// }
module.exports = new OrderController();
