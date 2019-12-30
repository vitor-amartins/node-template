const models = require('./../../models');

const injector = async (req, res, next) => {
  try {
    res.locals.MODELS = models;
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = injector;
