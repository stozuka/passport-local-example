'use strict';

function postLogin(req, res, next) {
  res.send(req.session);
}

module.exports = {
  postLogin
};
