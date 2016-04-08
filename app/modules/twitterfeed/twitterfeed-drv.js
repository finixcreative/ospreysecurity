angular.module('coreMod')
	.directive('twitterfeed', function(){
		return {
			restrict: 'E',
			templateUrl: 'app/modules/twitterfeed/twitterfeed.html'
		};
	});