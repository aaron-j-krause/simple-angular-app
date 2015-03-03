module.exports = exports = {};

var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  basic:{
    email: String,
    password: String
  },
  name: String
});

module.exports = mongoose.model('User', userSchema);
