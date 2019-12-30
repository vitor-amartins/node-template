const errorHandler = async (error, req, res, next) => {
  try {
    if (error.status && error.data) {
      res.locals.status = error.status;
      res.locals.data = error.data;
    } else {
      console.log(error);
      res.locals.status = 500;
      res.locals.data = error.name || 'Internal Server Error';
    }
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = errorHandler;
