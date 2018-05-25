const { env } = require('../config/environment');

function errorHandler(err, req, res, next) {

  // Unauthorized error
  if(err.message === 'Unauthorized'){
    return res.status(401).json({ message: 'Unauthorized' });
  }

  // Expired token error
  if(err.name === 'TokenExpiredError'){
    return res.status(401).json({ message: 'Token expired' });
  }

  // Validation error
  if(err.name === 'ValidationError') {

    const errors = {};
    for(const field in err.errors) {
      errors[field] = err.errors[field].message;
    }
    err.errors = errors;

    return res.status(422).json({ message: 'Unprocessable Entity', errors });
  }

  // Internal server error
  res.status(500).json({ message: 'Internal Server Error' });
  if(env !== 'test') next(err);
}

module.exports = errorHandler;
