angular.module('coreMod')
	.directive('plugin', function ($compile, TemplateService){
		var getTemplate = function (templates, contentType){
			var template = '';
			switch (contentType){
				case 'image':
					template = templates.imageTemplate;
					break;
				case 'video':
					template = templates.videoTemplate;
					break;
				case 'notes':
					template = templates.noteTemplate;
					break;
			}
			return template;
		};
		var linker = function (scope, element, attrs){
			scope.rootDirectory = 'images/';
			TemplateService.getTemplates().then(function (response){
				var templates = response.data;
				element.html(getTemplate(templates, scope.content.content_type));
				$compile(element.contents())(scope);
			});
		};
		var linker = function (scope, element){
			var template = '<' + scope.plugin + '>' + '</' + scope.plugin + '>',
			compiled = $compile(template)(scope);
			element.append(compiled);            
		};
		return {
			restrict: 'EAC',
			replace: true,
			scope: {
				content: '=',
				plugin: '=',
			},
			link: linker,
		};
	});

	.directive('plugin', ['$compile', function($compile){

	}]);