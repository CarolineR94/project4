/* global api, describe, it, expect beforeEach */

const Article = require('../../../models/article');

const articleData = {
  translations: [{
    title: 'Tax rises needed \'to prevent NHS misery\'',
    tagline: 'The first article to be posted',
    image: 'Taxes are going to have to rise to pay for the NHS if the UK is to avoid \'a decade of misery\' in which the old, sick and vulnerable are let down, say experts.',
    language: 'en',
    content: 'The Institute for Fiscal Studies and Health Foundation said the NHS would need an extra 4% a year - or £2,000 per UK household - for the next 15 years. It said the only realistic way this could be paid for was by tax rises. It comes as ministers are arguing behind the scenes about NHS funding. The prime minister has promised a long-term funding plan for the NHS. This is expected to cover the next decade and could be announced as soon as next month, in time for the 70th anniversary of the creation of the NHS. It has been announced that an \'NHS assembly\' will be set up where national and local stakeholders can discuss progress on achieving plans for the NHS\'s future. The Treasury is believed to want to keep average rises at about 2% a year, but other ministers are arguing for more, the BBC understands. Health and Social Care Secretary Jeremy Hunt is believed to want at least 3% a year. As those discussions continue, the IFS and Health Foundation have revealed the findings of their review, commissioned by the NHS Confederation, which represents NHS trusts. It warned the ageing population and rising number of people with long-term conditions, such as diabetes and heart disease, meant the health service needed more than it had been getting in the past decade. In recent years the annual rises once inflation is taken into account have been limited to just over 2%. But continuing in this vein would lead to a continued deterioration in performance, the report warned.'
  }]
};

let articleId;

describe('GET /articles/:id', () => {
  beforeEach(done => {
    Article.remove({})
      .then(() => Article.create(articleData))
      .then(article => {
        articleId = article._id;
      })
      .then(() => done());
  });

  it('should return a 200 response', done => {
    api
      .get(`/api/articles/${articleId}`)
      .send(articleData)
      .end((err, res) => {
        expect(res.status).to.eq(200);
        done();
      });
  });


  it('should return an object as response body', done => {
    api
      .get(`/api/articles/${articleId}`)
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        done();
      });
  });


  it('should return a valid article object', done => {
    api
      .get(`/api/articles/${articleId}`)
      .end((err, res) => {
        res.body.translations.forEach(translation => {
          expect(translation._id).to.exist;
          expect(translation.title).to.eq(articleData.translations[0].title);
          expect(translation.tagline).to.eq(articleData.translations[0].tagline);
          expect(translation.image).to.eq(articleData.translations[0].image);
          expect(translation.language).to.eq(articleData.translations[0].language);
          expect(translation.content).to.eq(articleData.translations[0].content);
        });

        done();
      });
  });


});
