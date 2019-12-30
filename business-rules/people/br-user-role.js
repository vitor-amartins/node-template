const list = async (req, res, next) => {
  try {
    res.locals.data = await res.locals.MODELS.UserRole.findAll({});
    res.locals.status = 200;

    next();
  } catch (err) {
    next(err);
  }
};

const detail = async (req, res, next) => {
  try {
    const userRole = await res.locals.MODELS.UserRole.findByPk(req.params.id);
    res.locals.data = userRole || 'Not Found';
    res.locals.status = userRole ? 200 : 404;

    next();
  } catch (err) {
    next(err);
  }
};

const remove = async (req, res, next) => {
  try {
    await res.locals.MODELS.UserRole.destroy({ where: { id: req.params.id } });
    res.locals.status = 204;

    next();
  } catch (err) {
    next(err);
  }
};

const create = async (req, res, next) => {
  try {
    const userRole = await res.locals.MODELS.UserRole.create({
      name: req.body.name,
    });
    res.locals.data = userRole;
    res.locals.status = 201;

    next();
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  try {
    const [updated] = await res.locals.MODELS.UserRole.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      res.locals.data = await res.locals.MODELS.UserRole.findByPk(req.params.id);
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
