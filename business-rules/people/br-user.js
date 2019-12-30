const select = {
  attributes: { exclude: ['password', 'role_id'] },
  include: { association: 'role' },
};

const list = async (req, res, next) => {
  try {
    res.locals.data = await res.locals.MODELS.User.findAll(select);
    res.locals.status = 200;

    next();
  } catch (err) {
    next(err);
  }
};

const detail = async (req, res, next) => {
  try {
    const user = await res.locals.MODELS.User.findByPk(req.params.id, select);
    res.locals.data = user || 'Not Found';
    res.locals.status = user ? 200 : 404;

    next();
  } catch (err) {
    next(err);
  }
};

const remove = async (req, res, next) => {
  try {
    await res.locals.MODELS.User.destroy({ where: { id: req.params.id } });
    res.locals.status = 204;

    next();
  } catch (err) {
    next(err);
  }
};

const create = async (req, res, next) => {
  try {
    const user = await res.locals.MODELS.User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      role_id: req.body.role,
    });
    res.locals.data = user;
    res.locals.data.password = undefined;
    res.locals.status = 201;

    next();
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  try {
    const [updated] = await res.locals.MODELS.User.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      res.locals.data = await res.locals.MODELS.User.findByPk(req.params.id, select);
      res.locals.status = 200;
    } else {
      next({ status: 404, data: 'Not Found' });
    }
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  list,
  detail,
  remove,
  create,
  update,
};
