require('../../app/js/client');
require('angular-mocks');

describe('users controller', function() {
  var $ControllerConstructor;
  var $httpBackend;
  var $scope;

  beforeEach(angular.mock.module('postApp'));

  beforeEach(angular.mock.inject(function($rootScope, $controller) {
    $scope = $rootScope.$new;
    $ControllerConstructor = $controller;
  }));

  it('should be able to create a controller', function() {
    var userController = $ControllerConstructor('userController',
      {$scope: $scope});
    expect(typeof userController).toBe('object');
    expect(Array.isArray($scope.userList)).toBe(true);

  });

  describe('user REST', function(){
    beforeEach(angular.mock.inject(function(_$httpBackend_){
      $httpBackend = _$httpBackend_;
    }));

    afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('should get a list of users', function() {
      $ControllerConstructor('userController', {$scope: $scope});
      $httpBackend.expectGET('/user/').respond(200, [{name: 'dave'}]);
      $scope.getUsers();
      $httpBackend.flush();

      expect($scope.userList[0].name).toBe('dave');
    })

    it('should create a new user')
  })
});
