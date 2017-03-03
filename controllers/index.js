'use strict';

function getIndex(req, res, next) {
  res.send('Top page');
}

module.exports = {
  getIndex
};
