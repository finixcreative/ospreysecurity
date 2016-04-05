angular.module("coreMod")
	.directive("fxheader", function(){
		return {
			restrict: "E",
			templateUrl: "app/modules/header/header.html",
			link: "app/modules/header/header-scroll.js"
		};
	})
;