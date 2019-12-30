const express = require('express');
const { brAuthentication } = require('./../../business-rules');

const router = express.Router();

router.route('/api/login').post(
  brAuthentication.login,
);

module.exports = router;
