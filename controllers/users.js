'use strict';

function getUsers(req, res, next) {
  res.json(req.session);
}

module.exports = {
  getUsers
};
