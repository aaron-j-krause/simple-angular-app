exports = module.exports = {};

var mongoose = require('mongoose');

var postSchema = mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  author: String,
  body: String
});

module.exports = mongoose.model('Post', postSchema);
