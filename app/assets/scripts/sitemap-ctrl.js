angular.module("coreMod")
	.controller("SitemapController", ["$scope", "$http", function($scope, $http){
		$scope.filepath = "client/scripts/sitemap.json";
		$scope.sitemap = [];
		$http.get($scope.filepath).then(
			function success(response){
				$scope.sitemap = response.data;
			},
			function error(response){
				$scope.errors = response.error;
			}
		);
	}])
;