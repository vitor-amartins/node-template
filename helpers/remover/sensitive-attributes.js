const sensitiveAttributes = async (req, res, next) => {
  try {
    const attributes = ['id', 'created_at', 'updated_at'];

    attributes.forEach((attribute) => {
      if (req.body[attribute] !== undefined) delete req.body[attribute];
    });

    next();
  } catch (err) {
    next(err);
  }
};

module.exports = sensitiveAttributes;
