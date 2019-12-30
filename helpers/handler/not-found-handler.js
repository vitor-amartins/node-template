const notFound = async (req, res, next) => {
  try {
    if (res.locals.status || res.locals.data) {
      next();
    } else {
      next({ status: 404, data: 'Invalid URL' });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = notFound;
