module.exports = function(app) {
  app.controller('userController', ['$scope', '$http', function($scope, $http) {

    $scope.userList = [];
    $scope.newUserErr = false;

    $scope.getUsers = function() {
      $http.get('/user/')
        .success(function(data) {
          $scope.userList = data;
        })
        .error(function(data) {
          console.log(data);
        });
    };

    $scope.userList = $scope.getUsers();

    $scope.createUser = function(user) {
      $http.post('/user/newuser', user)
        .success(function(data) {
          $scope.userList.push(user.name);
        })
        .error(function(data) {
          console.log('error creating user:', data);
        });
      $scope.newUser = {};
    };

  }]);
};
