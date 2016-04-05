angular.module('coreMod')
	.factory('Content', ['$resource', function ($resource){
		return $resource('app/pages/:pageId/content.js', {}, {});
	}]);