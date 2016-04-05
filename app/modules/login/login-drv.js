angular.module('coreMod')
	.directive('login', function(){
		return {
			restrict: 'E',
			templateUrl: '/web/app/modules/login/login.html',
			controller: 'ClientController'
		};
	});