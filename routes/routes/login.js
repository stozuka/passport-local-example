'use strict';

const express = require('express');
const router = express.Router();
const loginController = require('../../controllers/login');

router.route('/')
  .post(loginController.postLogin)

module.exports = router;
