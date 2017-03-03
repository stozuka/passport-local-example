'use strict';

function loginChecker(req, res, next) {
  // Passport saves user data into req.user when user is logged in.
  if (req.user) {
    next();
  } else {
    res.status(401).send('Unauthorized');
  }
}

module.exports = loginChecker;
