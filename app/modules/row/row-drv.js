angular.module('coreMod')
	.directive('row', function(){
		return {
			restrict: 'E',
			replace: false,
			templateUrl: '/web/app/modules/row/row.html',
		};
	});