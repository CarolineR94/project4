const Article = require('../models/article');

function indexRoute(req, res, next){
  Article
    .find()
    .exec()
    .then((article) => res.json(article))
    .catch(next);
}

function showRoute(req, res, next){
  Article
    .findById(req.params.id)
    .then((article) => res.json(article))
    .catch(next);
}

module.exports = {
  index: indexRoute,
  show: showRoute
};
