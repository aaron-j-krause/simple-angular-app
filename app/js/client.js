require('angular/angular');

var addPostController = require('./posts/controllers/post-controller');
var addUserController = require('./users/controllers/user-controller');

var addResourceService = require('./services/resource-service.js');

var addCreatePostDirective =
  require('./posts/directives/create-post-directive.js');
var addCreateUserDirective =
  require('./users/directives/create-user-directive.js');

var postApp = angular.module('postApp', []);

//services
addResourceService(postApp);

//controllers
addPostController(postApp);
addUserController(postApp);

//directives
addCreatePostDirective(postApp);
addCreateUserDirective(postApp);
