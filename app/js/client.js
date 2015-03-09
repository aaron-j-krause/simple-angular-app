require('angular/angular');

var addPostController = require('./posts/post-controller');
var addUserController = require('./users/user-controller');

var postApp = angular.module('postApp', []);

addPostController(postApp);
addUserController(postApp);
