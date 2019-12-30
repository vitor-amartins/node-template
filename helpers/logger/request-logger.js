const injector = async (req, res, next) => {
  try {
    if (res.locals.USER) {
      const data = {
        url: `${req.protocol}://${req.get('host')}${req.originalUrl}`,
        body: Object.entries(req.body).length ? JSON.stringify(req.body) : null,
        method: req.method,
        user_id: res.locals.USER.id,
      };
      await res.locals.MODELS.RequestLog.create(data);
    }
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = injector;
