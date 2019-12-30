const validator = (requiredFields) => async (req, res, next) => {
  try {
    const message = res.locals.UTILS.requiredFields(requiredFields, req.body);

    if (message) {
      return next({ status: 400, data: message });
    }

    return next();
  } catch (err) {
    return next(err);
  }
};

module.exports = validator;
