module.exports = function(app) {
  app.directive('createUserDirective', function() {
    return {
      restrict: 'A',
      templateUrl: './templates/users/directives/create-user-directive.html',
      replace: true
    };
  });
};
