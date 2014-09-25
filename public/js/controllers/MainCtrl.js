angular.module('MainCtrl', []).controller('MainController', ['$scope', 'User', function($scope,User,$rootscope) {

	$scope.tagline = 'Finding the content youve been searching for!';
  	//$scope.currentUser = null;
  	//$scope.userRoles = USER_ROLES;
  //	$scope.isAuthorized = AuthService.isAuthorized;

  	//$scope.setCurrentUser = function (user) {
    //	$scope.currentUser = user;
  	//};

/**	$scope.signUp = function(){
		if($scope.name === ''){ return; }
		User.create ({ name: $scope.name, password: $scope.password, email: $scope.email });
		$scope.name = '';
		$scope.password = '';
		$scope.email = '';

	};

	//need re_direct
	$scope.logIn = function(){
		var g = User.getEmail($scope.exname);
		if($scope.expassword === g.password){
			$rootscope.g = g;
			$rootscope.artreccs = g.articlesReccomended;

		}
	}; **/

}]);
