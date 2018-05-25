const jwt = require('jsonwebtoken');
const { secret } = require('../config/environment');
const Promise = require('bluebird');
const User = require('../models/user');

// Check for the presence of token
function secureRoute(req, res, next) {
  if(!req.headers.authorization) return res.status(401).json({ message: 'Unauthorized' });

  const token = req.headers.authorization.replace('Bearer ', '');

  // Take payload from token and either return error or pass to next block
  new Promise((resolve, reject) => {
    jwt.verify(token, secret, (err, payload) => {
      if(err) return reject(err);
      resolve(payload);
    });
  })
  // Either return unauthorized or set user as req.currentUser so it can be accessed elsewhere
    .then(payload => User.findById(payload.sub))
    .then(user => {
      if(!user) return res.status(401).json({ message: 'Unauthorized' });
      req.currentUser = user;
      next();
    })
    .catch(next);
}

module.exports = secureRoute;
