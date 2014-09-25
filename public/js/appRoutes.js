angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		// nerds page that will use the NerdController
		.when('/users', {
			templateUrl: 'views/nerd.html',
			controller: 'UserController'
		})

		//
		.when('/articles', {
			templateUrl: 'views/geek.html',
			controller: 'ArticleController'
		});

		//.when('/hello', {
		//	templateUrl: 'views/geek.html',
		//	controller: 'GeekController'
		//});

	$locationProvider.html5Mode(true);

}]);
