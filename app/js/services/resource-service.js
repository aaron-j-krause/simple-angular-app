
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
        save: function(data, params, callback) {
          if (!callback) {
            callback = params;
            params = '';
          }

          $http.post(resourceName + '/' + params, data)
            .success(function(data) {
              callback(null, data);
            })
            .error(function(data) {
              callback(data);
            });
        },
        edit: function(data, params, callback) {
          if (!callback) {
            callback = params;
            params = '';
          }

          $http.put(resourceName + '/' + params, data)
            .success(function(data) {
              callback(null, data);
            })
            .error(function(data) {
              callback(data);
            });
        },
        delete: function(data, params, callback) {
          if (!callback) {
            callback = params;
            params = '';
          }

          $http.delete(resourceName + '/' + params, data)
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
