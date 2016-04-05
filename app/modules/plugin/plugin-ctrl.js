angular.module('coreMod')
	.controller('PluginController', function($scope, pluginFactory) {
		$scope.plugin = [];
		pluginFactory().then(function(plugin) {
			$scope.plugin = plugin; 
		});
	});