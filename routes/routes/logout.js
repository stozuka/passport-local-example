'use strict';

const express = require('express');
const router = express.Router();
const logoutController = require('../../controllers/logout');

router.route('/')
  .post(logoutController.postLogout);

module.exports = router;
