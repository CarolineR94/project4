const mongoose = require('mongoose');
const moment = require('moment');


// translations
const translationsSchema = new mongoose.Schema({
  author: { type: mongoose.Schema.ObjectId, ref: 'User' },
  title: { type: String, required: 'This field is required' },
  tagline: { type: String, required: 'This field is required' },
  image: { type: String, required: 'This field is required' },
  language: { type: String, required: 'This field is required' },
  content: { type: String, required: 'This field is required' }
},{
  timestamps: true
});

translationsSchema.virtual('createdAtRelative')
  .get(function(){
    return moment(this.createdAt).fromNow();
  });

translationsSchema.set('toJSON', { virtuals: true });



// articles
const articleSchema = new mongoose.Schema({
  translations: [ translationsSchema ]
});

articleSchema.virtual('translatedInto')
  .get(function() {
    return this.translations.map(translation => translation.language);
  });

articleSchema.set('toJSON', { virtuals: true });



module.exports = mongoose.model('Article', articleSchema);
