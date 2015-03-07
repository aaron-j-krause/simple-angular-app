require('../../app/js/client');
require('angular-mocks');

describe('posts controller', function(){
  var $ControllerConstructor;
  var $httpBackend;
  var $scope;

  beforeEach(angular.mock.module('postApp'));

  beforeEach(angular.mock.inject(function($rootScope, $controller){
    $scope = $rootScope.$new;
    $ControllerConstructor = $controller;
  }));

  it('should be able to create a controller', function(){
    var postController = $ControllerConstructor('postController', {$scope: $scope});
    expect(typeof postController).toBe('object');
    expect(Array.isArray($scope.posts)).toBe(true);

  })

  describe('REST', function() {
    beforeEach(angular.mock.inject(function(_$httpBackend_){
      $httpBackend = _$httpBackend_;
    }))

    afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    })

    it('should get all posts', function(){
      $httpBackend.expectGET('/posts/').respond(200, [{body: 'test post'}])

      var postController = $ControllerConstructor('postController', {$scope: $scope});
      $scope.getAllPosts();
      $httpBackend.flush();

      expect($scope.posts[0].body).toBe('test post')
    })

    it('should create a post', function(){
      $httpBackend.expectPOST('/posts/dave/newpost').respond(200, {_id: 1, body: 'test post'});

      var postController  = $ControllerConstructor('postController', {$scope: $scope});
      $scope.createPost({body: 'test post'});
      $httpBackend.flush();

      expect($scope.posts[0]._id).toBe(1);
    })

  })
})