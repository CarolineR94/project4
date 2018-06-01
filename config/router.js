const router = require('express').Router();
const articles = require('../controllers/articles');
const auth = require('../controllers/auth');
const secureRoute = require('../lib/secureRoute');


// article routes
router.route('/articles')
  .get(articles.index)
  .post(secureRoute, articles.create);

router.route('/articles/:id')
  .get(articles.show);

router.route('/articles/:id/:language')
  .put(secureRoute, articles.update)
  .delete(secureRoute, articles.delete);


// translation routes
router.route('/articles/:id/translations')
  .post(secureRoute, articles.articleTranslate);


// login and register routes
router.post('/register', auth.register);
router.post('/login', auth.login);


module.exports = router;
