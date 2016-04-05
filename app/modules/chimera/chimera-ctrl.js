/*
CHIMERA | Shapeshifter module accepts dynamic route parameter to fetch page content data.
© 2015 Finix, all rights reserved.
*/
angular.module('chimeraMod')
	.controller('ChimeraController', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location){
		var chimera, pageData;
		chimera = $routeParams.chimera;
		pageData = 'app/contents/'+chimera+'.json';
		$scope.template = 'app/modules/hydra/hydra.html';
		$scope.contents = [];
		$scope.errors = [];
		$scope.edit = false;
		$http.get(pageData).then(
			function success(response){
				//success callbacks
				$scope.contents = response.data;
				console.log(
					"Chimera: " + chimera + "\n",
					"Page URL: " + pageData + "\n",
					"Template URL: " + $scope.template + "\n",
					"Content Level 1: " + $scope.contents
				);
				for(var i = 0; i < $scope.contents.length; i++){
					console.log(
						"Name: " + $scope.contents[i].config.title + "\n",
						"Type: " + $scope.contents[i].config.type + "\n",
						$scope.contents[i].config.type + " " + (i + 1) + " of " + $scope.contents.length + "\n",
						"Content Level 2: " + $scope.contents[i].contents + "\n",
						"-> contains " + $scope.contents[i].contents.length + " widgets."
					);
					for(var j = 0; j < $scope.contents[i].contents.length; j++){
						console.log(
							"Name: " + $scope.contents[i].contents[j].config.title + "\n",
							"Type: " + $scope.contents[i].contents[j].config.type + "\n",
							$scope.contents[i].contents[j].config.type + " " + (j + 1) + " of " + $scope.contents[i].contents.length + "\n",
							"Content Level 3: " + $scope.contents[i].contents[j].contents + "\n",
							"-> contains " + $scope.contents[i].contents[j].contents.length + " components."
						);
					};
				};
			},
			function error(response){
				//error callbacks
				$scope.contents = response.data;
				$scope.errors = response.error;
				console.log(
					"Chimera: " + chimera + "\n",
					"Page URL: " + pageData + "\n",
					"Template URL: " + $scope.template + "\n",
					"Contents: " + $scope.contents[0].contents + "\n",
					"Errors: " + $scope.errors
				);
				if($scope.errors == undefined){
					$location.url("/404");
				};
			}
		);
		/* Post method
		$http.post(pageData).then(
			function success(response){
				$scope.contents = response.data;
			},
			function error(response){
				$scope.contents = response.data;	
				$scope.errors = response.error;
			}
		);
		*/
		/* Element cases
		function getConfig($scope){
			var configtype;
			for(var i = 0; i < $scope.contents.length; i++){
				console.log($scope.contents[i].config.type);
				if(
					$scope.contents[i].config.type === "h1" ||
					$scope.contents[i].config.type === "h2" ||
					$scope.contents[i].config.type === "h3" ||
					$scope.contents[i].config.type === "h4" ||
					$scope.contents[i].config.type === "h5" ||
					$scope.contents[i].config.type === "h6"
				){
					console.log("Config Headline");
					configtype = "configheadline";
				} else if($scope.contents[index].config.type === "p"){
					console.log("Config Text");
					configtype = "configtext";
				} else if($scope.contents[index].config.type === "img"){
					console.log("Config Image");
					configtype = "configimg";
				} else {
					console.log("Error. Config type for " + $scope.contents[i].config.type + " is not defined");
					configtype = "wompwomp";
				}
			}
			console.log("Config Type: " + configtype);
			return configtype;
		};
		$scope.configtype = getConfig();
		*/
	}])
;