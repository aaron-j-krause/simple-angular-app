var express = require('express');
var router = express.Router();
var User = require('../schema/userSchema');

module.exports = function(router, passport, appSecret) {

  router.get('/', function(req, res) {
    var list = [];
    User.find({}, 'name', function(err, users) {
      res.json(users);
    });
  });

  router.post('/newuser', function(req, res) {
    var newUser = new User({name: req.body.name, age: req.body.age});

    newUser.basic.email = req.body.email;
    newUser.basic.password = newUser.generateHash(req.body.password);

    newUser.save(function(err, user) {
      if (err) return res.status(500).send({msg: 'could not create user'});

      res.json({'msg':'user saved'})
    });
  });
});
