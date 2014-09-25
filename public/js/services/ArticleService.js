angular.module('ArticleService', []).factory('Article', ['$http', function($http) {

	return {
		// call to get all nerds
		get : function() {
			return $http.get('/api/articles');
		},

		getId : function(id) {
			return $http.get('/api/articles/' + id);
		},

		// call to POST and create a new geek
		create : function(artData) {
			return $http.post('/api/articles', artData);
		},

		// call to DELETE a geek
		delete : function(id) {
			return $http.delete('/api/articles/' + id);
		}
	}

}]);
