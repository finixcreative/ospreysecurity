angular.module('coreMod')
	.controller('ElementController', function ($scope){
		$scope.elements = [
			{
				plugin: 'copyright',
				elements: [
					{plugin: 'contact'},
					{plugin: 'social'},
				],
			},
			{
				plugin: 'copyright',
				elements: [
					{plugin: 'contact'},
					{plugin: 'social'},
				],
			},
		];
		$scope.createElement = angular.element('<' + $scope..element.plugin + '></' + $scope.element.plugin + '>');
	});