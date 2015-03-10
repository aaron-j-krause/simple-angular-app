module.exports = function(app) {
  app.directive('createPostDirective', function() {
    return {
      restrict: 'A',
      templateUrl: './templates/posts/directives/create-post-directive.html',
      replace: true
    };
  });
};
