const mongoose = require('mongoose');
const moment = require('moment');

const translationsSchema = new mongoose.Schema({
  author: { type: mongoose.Schema.ObjectId, ref: 'User' },
  title: { type: String, required: 'This field is required' },
  tagline: { type: String, required: 'This field is required' },
  image: { type: String, required: 'This field is required' },
  language: { type: String, required: 'This field is required' },
  content: { type: String, required: 'This field is required' }
});

const articleSchema = new mongoose.Schema({
  translations: [ translationsSchema ]
},{
  timestamps: true
});

articleSchema.virtual('createdAtRelative')
  .get(function(){
    return moment(this.createdAt).fromNow();
  });

module.exports = mongoose.model('Article', articleSchema);
