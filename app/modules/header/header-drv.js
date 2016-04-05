angular.module("coreMod")
	.directive("fxheader", function(){
		function headerScroll(){
			$(window).on('scroll',function(){
				distance = Math.round($(window).scrollTop());
				if (distance > 200) {
					$('header').addClass('white-bg');
				} else {
					$('header').removeClass('white-bg');
				}
			});
		};
		return {
			restrict: "E",
			templateUrl: "app/modules/header/header.html",
			link: headerScroll
		};
	})
;