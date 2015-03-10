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
        User.save(user, function(err, data) {
          if (err) {
            $scope.userSuccess = false;
            return console.log(err);
          }
          $scope.userSuccess = true;
          $scope.userList.push(data);
        });
        $scope.newUser = {};
      };

    }]);
};
