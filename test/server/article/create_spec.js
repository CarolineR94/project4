/* global api, describe, it, expect beforeEach */

const Article = require('../../../models/article');
const User = require('../../../models/user');
const jwt = require('jsonwebtoken');
const { secret } = require('../../../config/environment');

const userData = {
  username: 'test',
  email: 'test@test.com',
  password: 'test',
  passwordConfirmation: 'test'
};

const articleData = {
  translations: [{
    title: 'Tax rises needed \'to prevent NHS misery\'',
    tagline: 'The first article to be posted',
    image: 'Taxes are going to have to rise to pay for the NHS if the UK is to avoid \'a decade of misery\' in which the old, sick and vulnerable are let down, say experts.',
    language: 'en',
    content: 'The Institute for Fiscal Studies and Health Foundation said the NHS would need an extra 4% a year - or £2,000 per UK household - for the next 15 years. It said the only realistic way this could be paid for was by tax rises. It comes as ministers are arguing behind the scenes about NHS funding. The prime minister has promised a long-term funding plan for the NHS. This is expected to cover the next decade and could be announced as soon as next month, in time for the 70th anniversary of the creation of the NHS. It has been announced that an \'NHS assembly\' will be set up where national and local stakeholders can discuss progress on achieving plans for the NHS\'s future. The Treasury is believed to want to keep average rises at about 2% a year, but other ministers are arguing for more, the BBC understands. Health and Social Care Secretary Jeremy Hunt is believed to want at least 3% a year. As those discussions continue, the IFS and Health Foundation have revealed the findings of their review, commissioned by the NHS Confederation, which represents NHS trusts. It warned the ageing population and rising number of people with long-term conditions, such as diabetes and heart disease, meant the health service needed more than it had been getting in the past decade. In recent years the annual rises once inflation is taken into account have been limited to just over 2%. But continuing in this vein would lead to a continued deterioration in performance, the report warned.'
  }]
};

let token;

describe('POST /articles', () => {
  beforeEach(done => {
    Promise.all([
      User.remove({}),
      Article.remove({})
    ])
      .then(() => User.create(userData))
      .then(user => {
        token = jwt.sign({ sub: user._id }, secret, { expiresIn: '6h' });
      })
      .then(() => done());
  });


  it('should return a 401 reponse witout token', done => {
    api
      .post('/api/articles')
      .send(articleData)
      .end((err, res) => {
        expect(res.status).to.eq(401);
        done();
      });
  });

  it('should return a 201 response with a token', done => {
    api
      .post('/api/articles')
      .set('Authorization', `Bearer ${token}`)
      .send(articleData)
      .end((err, res) => {
        expect(res.status).to.eq(201);
        done();
      });
  });


  it('should return a valid article object', done => {
    api
      .post('/api/articles')
      .set('Authorization', `Bearer ${token}`)
      .send(articleData)
      .end((err, res) => {
        expect(res.body._id).to.be.a('string');
      
        done();
      });
  });
});
