require('../../app/js/client');
require('angular-mocks');

describe('posts controller', function() {
  var $ControllerConstructor;
  var $httpBackend;
  var $scope;

  beforeEach(angular.mock.module('postApp'));

  beforeEach(angular.mock.inject(function($rootScope, $controller) {
    $scope = $rootScope.$new;
    $ControllerConstructor = $controller;
  }));

  it('should be able to create a controller', function() {
    var postController = $ControllerConstructor('postController',
      {$scope: $scope});
    expect(typeof postController).toBe('object');
    expect(Array.isArray($scope.posts)).toBe(true);

  });

  describe('REST', function() {
    beforeEach(angular.mock.inject(function(_$httpBackend_) {
      $httpBackend = _$httpBackend_;
    }));

    afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('should get all posts', function() {
      $httpBackend.expectGET('/posts/')
        .respond(200, [{body: 'test post'}]);

      $ControllerConstructor('postController', {$scope: $scope});
      $scope.getAllPosts();
      $httpBackend.flush();

      expect($scope.posts[0].body).toBe('test post');
    });

    it('should create a post', function() {
      $httpBackend.expectPOST('/posts/dave')
        .respond(200, {_id: 1, body: 'test post'});

      $ControllerConstructor('postController', {$scope: $scope});
      $scope.createPost({body: 'test post', user:'dave'});
      $httpBackend.flush();

      expect($scope.posts[0]._id).toBe(1);
    });

    it('should edit posts', function() {
      $httpBackend.expectPUT('/posts/1')
        .respond(200, {_id: 1, body: 'edit post'});

      $ControllerConstructor('postController', {$scope: $scope});
      var post = {_id: 1, body: 'edit post'};
      $scope.editPost(post);
      $httpBackend.flush();

      expect(post._id).toBe(1);
    });

    it('should delete posts', function() {
      $httpBackend.expectDELETE('/posts/1')
        .respond(200, {msg: 'message deleted'});

      $ControllerConstructor('postController', {$scope: $scope});
      var post = {_id: 1, body: 'test post', author: 'dave'};
      $scope.posts.push(post);
      $scope.deletePost(post);
      $httpBackend.flush();

      expect($scope.posts.length).toBe(0);
    });

  });
});
