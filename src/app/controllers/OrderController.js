const axios = require("../config/api");

class OrderController {
  async index(req, res) {
    const response = await axios.get("/v2/orders");
    const { orders } = response.data;
    res.json(paginate(orders, req.query.page_size, req.query.page_number));
  }

  async show(req, res) {
    const id = req.params.id;
    const response = await axios.get(`/v2/orders/${id}`);
    res.json(response.data);
  }
}
function paginate(array, page_size, page_number) {
  --page_number;
  return array.slice(page_number * page_size, (page_number + 1) * page_size);
}
module.exports = new OrderController();
