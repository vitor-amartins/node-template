const express = require('express');
const { brUserRole } = require('./../../business-rules');
const authorizer = require('./../../helpers/authorizer');
const checkRequiredFields = require('./../../helpers/validator/required-fields');

const router = express.Router();

router.route('/api/user-roles').get(
  authorizer,
  brUserRole.list,
);

router.route('/api/user-roles/:id(\\d+)').get(
  authorizer,
  brUserRole.detail,
);

router.route('/api/user-roles/:id(\\d+)').delete(
  authorizer,
  brUserRole.remove,
);

router.route('/api/user-roles').post(
  authorizer,
  checkRequiredFields(['name']),
  brUserRole.create,
);

router.route('/api/user-roles/:id(\\d+)').patch(
  authorizer,
  brUserRole.update,
);

module.exports = router;
