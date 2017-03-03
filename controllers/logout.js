'use strict';

function postLogout(req, res, next) {
  req.session.destroy(function (err) {
    if (err) {
      next(err);
      return null;
    }

    // req.logout() destroys req.session. Because this doesn't destroy req.session, req.session.destroy is also needed.
    req.logout();

    // To clear client side cookie
    res.clearCookie('connect.sid');

    res.send('Logout');
  });
}

module.exports = {
  postLogout,
};
