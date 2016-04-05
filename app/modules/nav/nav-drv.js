angular.module("coreMod")
	.directive("fxnav", function(){
		return {
			restrict: "E",
			templateUrl: "app/modules/nav/nav.html",
			controller: "SitemapController"
		};
	})
;