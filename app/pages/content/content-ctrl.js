angular.module('coreMod')
	.controller('ContentController', ['$scope', '$routeParams', 'Content', function ($scope, $routeParams, Content){
		$scope.elements = Content.get({pageId: $routeParams.pageId});
	}]);