require('angular/angular');

var addPostController = require('./posts/post-controller')

var postApp = angular.module('postApp', [])

addPostController(postApp);