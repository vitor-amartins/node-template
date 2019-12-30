const requestHandler = (req, res) => {
  const body = {};

  if (res.locals.data || res.locals.data === false) body.data = res.locals.data;
  if (res.locals.message) body.message = res.locals.message;

  res.status(res.locals.status || 200).json(body);
};

module.exports = requestHandler;
