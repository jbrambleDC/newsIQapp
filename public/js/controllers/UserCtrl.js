angular.module('UserCtrl', []).controller('UserController', ['$scope', 'User','Article', function($scope,User,Article,$rootscope) {

	$scope.tagline = 'Here you will find your reccommended articles';
	//$scope.reccs = $rootscope.g.articlesReccomended;
	$scope.allArts = function(){
		var arts = [];
		var x;
		var currArt;
		for(x in $scope.reccs){
			currArt = Article.getId ($scope.reccs[x]);
			x.push(currArt.url);
		}
		return x;
	};


}]);
