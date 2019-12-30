const express = require('express');
const { brUser } = require('./../../business-rules');
const { userValidators } = require('./../../validators');
// const authorizer = require('./../../helpers/authorizer');
const checkRequiredFields = require('./../../helpers/validator/required-fields');

const router = express.Router();

// router.use(authorizer);

router.route('/api/users').get(
  brUser.list,
);

router.route('/api/users/:id(\\d+)').get(
  brUser.detail,
);

router.route('/api/users/:id(\\d+)').delete(
  brUser.remove,
);

router.route('/api/users').post(
  checkRequiredFields(['name', 'email', 'password', 'role']),
  userValidators.checkEmailIsRegisted,
  userValidators.hashPassword,
  brUser.create,
);

router.route('/api/users/:id(\\d+)').patch(
  userValidators.checkDataToUpdate,
  brUser.update,
);

module.exports = router;
