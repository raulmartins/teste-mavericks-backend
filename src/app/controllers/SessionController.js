const qs = require('querystring');
const axios = require('../config/authApi');

class SessionController {
  async store(req, res) {
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    };
    const { username, password } = req.body;

    const response = await axios.post(
      '/oauth/token',
      qs.stringify({
        client_id: 'APP-H1DR0RPHV7SP',
        grant_type: 'password',
        username,
        password,
        scope: 'APP_ADMIN',
      }),
      config,
    );
    res.json(response.data);
  }
}

module.exports = new SessionController();
