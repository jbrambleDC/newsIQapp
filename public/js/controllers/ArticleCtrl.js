angular.module('ArticleCtrl', []).controller('ArticleController', ['$scope', 'Article', function($scope, Article) {

	$scope.tagline = 'Explore all blogs and articles';
	$scope.articles = Article.get;
}]);
