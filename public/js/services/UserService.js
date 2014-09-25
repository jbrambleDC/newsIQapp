angular.module('UserService', []).factory('User', ['$http', function($http) {

	return {
		// call to get all nerds
		get : function() {
			return $http.get('/api/users');
		},

		getId : function(id) {
			return $http.get('/api/users/' + id);
		},

		getName : function(name) {
			return $http.get('api/users/name/' + name);
		},

		getEmail : function(email) {
			return $http.get('api/users/email/' + email);
		},

		// call to POST and create a new nerd
		create : function(userData) {
			return $http.post('/api/users', userData);
		},

		// call to DELETE a nerd
		delete : function(id) {
			return $http.delete('/api/users/' + id);
		}
	}

}]);
