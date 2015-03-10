require('angular/angular');

var addPostController = require('./posts/post-controller');
var addUserController = require('./users/user-controller');

var addResourceService = require('./services/resource-service.js');

var postApp = angular.module('postApp', []);

//services
addResourceService(postApp);

//controllers
addPostController(postApp);
addUserController(postApp);
