angular.module("coreMod")
	.controller("ConfigController", ["$scope", "$rootScope", function($scope, $rootScope){
		$rootScope.user = false;
		$rootScope.configure = false;
		$rootScope.userCheck = function(){
			console.log(
				"User Init = " + $rootScope.user + "\n",
				"Configure Init = " + $rootScope.configure
			);
			function userError(){
				logout();
				console.log("Username error");
				alert("Your username was incorrect. Try again!");
				login();
			};
			function pwError(){
				logout();
				console.log("Password error");
				alert("Your password was incorrect. Try again!");
			};
			function restricted(){
				logout();
				alert("Sorry, you don't have access");
			};
			function login(){
				var user = {},
					username,
					password,
					guest = {
						"username": "guest",
						"password": "password"
					};
				username = function(){
					user.username = prompt("Enter your username:", "Call me Ishmael");
					if(user.username === guest.username){
						password();
					} else if(user.username === null){
						logout();
					} else {
						userError();
					};
				};
				password = function(){
					user.password = prompt("Thank you. Now enter your password:", "moby123");
					if(user.password === guest.password){
						$rootScope.user = !$rootScope.user;
						console.log("Logged in");
					} else if(user.password === null){
						logout();
					} else {
						pwError();
					};
				};
				username();
			};
			function logout(){
				$rootScope.user = false;
				if($rootScope.configure === true){
					$scope.configPanel();
				};
				console.log("Logged out");
			};
			if($rootScope.user !== true){
				login();
			} else {
				logout();
			};
			console.log(
				"User Update = " + $rootScope.user + "\n",
				"Configure Update = " + $rootScope.configure
			);
		};
		if($rootScope.configure === true){
			$(".hydra").addClass("relative");
			$scope.configLabel = "Done";
		} else if($rootScope.configure === false){
			$(".hydra").removeClass("relative");
			$scope.configLabel = "Edit";
		} else {
			$scope.configLabel = "Error";			
		};
		$scope.configPanel = function(){
			console.log("Configure Init = " + $rootScope.configure);
			$rootScope.configure = !$rootScope.configure;
			if($rootScope.configure === true){
				$(".hydra").addClass("relative");
				$scope.configLabel = "Done";
			} else if($rootScope.configure === false){
				$(".hydra").removeClass("relative");
				$scope.configLabel = "Edit";
			} else {
				$scope.configLabel = "Error";
			}
			console.log("Configure Update = " + $rootScope.configure);
		};
	}])
;