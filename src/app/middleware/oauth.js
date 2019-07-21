const axios = require('../config/api');

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) res.status(401).json({ error: 'Token not provided' });
  axios.defaults.headers.common.Authorization = authHeader;

  return next();
};
