angular.module('coreMod')
	.factory('ElementService', function ($http, URL){
		var getElements = function (){
			return $http.get(URL + 'content.js');
		};
		return {
			getElements: getElements
		};
	});