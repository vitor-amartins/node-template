const jwt = require('jsonwebtoken');

const injector = async (req, res, next) => {
  try {
    const token = req.headers['x-access-token'];

    if (!token) {
      return next({ status: 401, data: 'Token não foi fornecido' });
    }

    try {
      const decoded = await jwt.verify(token, process.env.JWT_SECRET);
      res.locals.USER = await res.locals.MODELS.User.findByPk(decoded.id);
      return next();
    } catch (err) {
      const message = err.name === 'TokenExpiredError' ? 'Token expirado' : 'Token inválido';
      return next({ status: 401, data: message });
    }
  } catch (err) {
    return next(err);
  }
};

module.exports = injector;
