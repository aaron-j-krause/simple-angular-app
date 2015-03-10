module.exports = function(app) {
  app.controller('userController', ['$scope', 'resource',
    function($scope, resource) {

      $scope.userList = [];
      $scope.newUserErr = false;
      User = resource('/user');

      $scope.getUsers = function() {
        User.getAll(function(err, data) {
          if (err) console.log(err);
          $scope.userList = data;
        });
      };

      $scope.createUser = function(user) {
        User.save(function(err, user) {
          if (err) console.log(err);
          $scope.userList.push(user);
        });
        $scope.newUser = {};
      };

    }]);
};
