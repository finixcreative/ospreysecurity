angular.module('coreMod', [])
	.controller('ClientController', ['$scope', '$http', function($scope, $http){
		$scope.filepath = 'client/scripts/client.json';
		$scope.client = [];
		$http.get($scope.filepath).then(
			function success(response){
				$scope.client = response.data;
			},
			function error(response){
				$scope.errors = response.error;
			}
		);
	}])
;