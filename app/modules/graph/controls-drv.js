angular.module("graphMod")
	.directive("controls", function(){
		return {
			restrict: "E",
			replace: true,
			templateUrl: "controls.html"
		};
	})
;