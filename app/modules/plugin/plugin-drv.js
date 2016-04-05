angular.module('coreMod')
	.directive('plugin', ['$compile', function($compile){
		return {
			restrict: 'E',
			replace: true,
			scope: {
				'plugin': '='
			},
			link: function(scope, element) {
				var template = '<' + scope.plugin + '>' + '</' + scope.plugin + '>',
				compiled = $compile(template)(scope);
				element.append(compiled);
			},
		};
	}]);