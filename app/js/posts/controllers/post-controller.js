
module.exports = function(app) {
  app.controller('postController', ['$scope', 'resource',
    function($scope, resource) {
      var Post = resource('/posts');

      $scope.posts = [];
      $scope.editButtonText = 'Edit';
      $scope.userErr = false;

      $scope.getAllPosts = function() {
        Post.getAll(function(err, data) {
          if (err) return console.log(err);
          $scope.posts = data;
        });
      };

      $scope.createPost = function(post) {
        $scope.userErr = false;
        Post.save(post, post.user, function(err, data) {
          if (err) {
            $scope.userErr = true;
            return console.log(err);
          }
          $scope.posts.push(data);
        });
        $scope.newPost = {};
      };

      $scope.editPost = function(post) {
        Post.edit(post, post._id, function(err, data) {
          if (err) return console.log(err);
          post.edit = false;
          post.editButtonText = 'Edit';
        });
      };

      $scope.deletePost = function(post) {
        Post.delete(post, post._id, function(err, data) {
          if (err) return console.log(err);
          $scope.posts.splice($scope.posts.indexOf(post), 1);
        });
      };

      $scope.editToggle = function(post) {
        if (post.edit) {
          post.editButtonText = 'Edit';
          post.edit = false;
          post.body = post.oldBody;
        } else {
          post.editButtonText = 'Cancel';
          post.edit = true;
          post.oldBody = post.body;
        }
      };

    }]);
};
