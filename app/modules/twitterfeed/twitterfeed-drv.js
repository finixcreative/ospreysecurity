angular.module('coreMod')
	.directive('twitterfeed', function(){
		return {
			restrict: 'E',
			templateUrl: '/web/app/modules/twitterfeed/twitterfeed.html'
		};
	});