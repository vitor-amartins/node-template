const checkEmailIsRegisted = async (req, res, next) => {
  try {
    const user = await res.locals.MODELS.User.findOne({
      where: { email: req.body.email },
    });
    if (user) {
      next({ status: 400, data: 'Email is already registered' });
    }
    next();
  } catch (err) {
    next(err);
  }
};

const checkDataToUpdate = async (req, res, next) => {
  try {
    if (req.body.password) delete req.body.password;
    if (req.body.role) req.body.role_id = req.body.role;
    next();
  } catch (err) {
    next(err);
  }
};

const hashPassword = async (req, res, next) => {
  try {
    req.body.password = res.locals.UTILS.hashPassword(req.body.password, req.body.email);
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  checkEmailIsRegisted,
  checkDataToUpdate,
  hashPassword,
};
