
module.exports = function(app) {
  app.controller('postController', ['$scope', '$http', function($scope, $http) {
    $scope.posts = [];
    $scope.userErr = false;

    $scope.getAllPosts = function() {
      $http.get('/posts/')
        .success(function(data) {
          $scope.posts = data;
        })
        .error(function(data) {
          console.log('error getting posts:', data);
        });
    };

    $scope.createPost = function(post) {
      $scope.userErr = false;
      $http.post('/posts/' + post.user, post)
        .success(function(data) {
          $scope.posts.push(data);
        })
        .error(function(data) {
          console.log('error creating post:', data);
          $scope.userErr = true;
        });
      $scope.newPost = {};
    };

    $scope.editPost = function(post) {
      $http.put('/posts/' + post._id, post)
      .success(function(data) {
        post.edit = false;
      })
      .error(function(data) {
        console.log('error updating post:', data);
      });
    };

    $scope.deletePost = function(post) {
      $http.delete('/posts/' + post._id)
      .success(function(data) {
        $scope.posts.splice($scope.posts.indexOf(post), 1);
      })
      .error(function(data) {
        console.log('error deleting post:', data);
      });
    };

    $scope.editToggle = function(post) {
      if (post.edit) {
        post.edit = false;
        post.body = post.oldBody;
      } else {
        post.edit = true;
        post.oldBody = post.body;
      }
    };

  }]);
};
