const utils = require('./../../utils');

const injector = async (req, res, next) => {
  try {
    res.locals.UTILS = utils;
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = injector;
