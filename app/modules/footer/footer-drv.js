angular.module('coreMod')
	.directive('fxfooter', function(){
		return {
			restrict: 'E',
			templateUrl: 'app/modules/footer/footer.html'
		};
	});