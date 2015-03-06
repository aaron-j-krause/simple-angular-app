require('../../app/js/client');
require('angular-mocks');

describe('posts controller', function(){
  var $ControllerConstructor;
  var $httpBackend;
  var $scope;

  beforeEach(angular.mock.module('postsApp'));

  beforeEach(angular.mock.inject(function($rootScope, $controller){
    $scope = $rootScope.$new;
    $ControllerConstructor = $controller;
  });

  it('should be able to create a controller', function(done){
    var notesController = $ControllerConstructor('notesController', {$scope: $scope});
    expect(typeof notesController).toBe('object');
    expect(Array.isArray($scope.posts).toBe(true));
  })
})