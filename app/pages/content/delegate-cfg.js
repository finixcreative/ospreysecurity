angular.module('coreMod')
	.config(function ($sceDelegateProvider){
		$sceDelegateProvider.resourceUrlWhitelist(['self', '**']);
	});