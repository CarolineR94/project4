const Article = require('../models/article');


// articles
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
    .populate('translations.author')
    .then(article => {
      const translation = article.translations.find(translation => translation.language === req.params.language);
      res.json(translation);
    })
    .catch(next);
}

function createRoute(req, res, next){
  Article
    .create(req.body)
    .then(article => res.status(201).json(article))
    .catch(next);
}

function updateRoute(req, res, next){
  Article
    .findById(req.params.id)
    .then(article => {
      const translation = article.translations.find(translation => translation.language === req.params.language);
      Object.assign(translation, req.body);
      return article.save();
    })
    .then(article => res.json(article))
    .catch(next);
}

function deleteRoute(req, res, next){
  Article
    .findById(req.params.id)
    .then(article => {
      const translation = article.translations.find(translation => translation.language === req.params.language);
      return translation.remove();
    })
    .then(() => res.sendStatus(204))
    .catch(next);
}


// translations
function articleTranslateRoute(req, res, next){
  Article
    .findById(req.params.id)
    .exec()
    .then(article => {
      article.translations.push(req.body);
      return article.save();
    })
    .then(article => res.json(article))
    .catch(next);
}



module.exports = {
  index: indexRoute,
  show: showRoute,
  create: createRoute,
  update: updateRoute,
  delete: deleteRoute,
  articleTranslate: articleTranslateRoute
};
