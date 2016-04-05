angular.module('coreMod')
	.factory('TemplateService', function ($http, URL){
		var getTemplates = function (){
			return $http.get(URL + 'templates.json');
		};
		return {
			getTemplates: getTemplates
		};
	});