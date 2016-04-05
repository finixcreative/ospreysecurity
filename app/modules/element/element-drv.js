angular.module('coreMod')
	.directive('element', function ($compile){
		return {
			restrict: 'E',
			replace: true,
			templateUrl: 'http://finixcreative.github.io/web/app/modules/element/element.html',
			controller: 'ElementController',
			controllerAs: 'element',
			scope: {
				plugin: '=',
			},
			link: function (scope, element, attrs){
				var compileElement = $compile(scope.createElement);
				var content = compileElement(scope);
				element.append(content);
			},
		};
	});