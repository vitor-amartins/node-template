const jwt = require('jsonwebtoken');

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email) next({ status: 400, data: { email: 'Field required' } });
    if (!password) next({ status: 400, data: { password: 'Field required' } });

    const hash = res.locals.UTILS.hashPassword(req.body.password, req.body.email);

    const user = await res.locals.MODELS.User.findOne({
      where: { email },
      include: { association: 'role' },
    });

    if (user && user.password === hash && !user.removed_at) {
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: 604800,
      });
      await res.locals.MODELS.User.update({ last_login: Date.now() }, {
        where: { id: user.id },
      });
      res.locals.data = { token, role: user.role.name };
      res.locals.status = 200;
      next();
    } else if (user.password !== hash) {
      next({ status: 400, data: 'Wrong password' });
    } else if (user.removed_at) {
      next({ status: 400, data: 'User removed' });
    }
    next({ status: 400, data: 'Wrong email' });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  login,
};
