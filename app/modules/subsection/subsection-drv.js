angular.module('coreMod')
	.directive('subsection', function(){
		return {
			restrict: 'E',
			replace: false,
			templateUrl: '/web/app/modules/subsection/subsection.html',
		};
	});