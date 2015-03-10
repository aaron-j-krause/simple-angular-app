
module.exports = function(app) {
  app.factory('resource', ['$http', function($http) {
    return function(resourceName) {
      return {
        getAll: function(callback) {
          $http.get(resourceName + '/')
            .success(function(data) {
              callback(null, data);
            })
            .error(function(data) {
              callback(data);
            });
        },
        save: function(callback, data) {
          $http.post(resourceName + '/', data)
            .success(function(data) {
              callback(null, data);
            })
            .error(function(data) {
              callback(data);
            });
        }
      };
    };
  }]);
};
