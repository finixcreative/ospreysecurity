angular.module('slidesMod')
	.directive('slides', function ($timeout){
		return {
			restrict: 'E',
			replace: true,
			scope: {images: '='},
			templateUrl: '/web/app/modules/slides/slides.html',
			controller: 'SlidesController',
			controllerAs: 'slides',
			link: function (scope, elem, attrs){
				scope.prev = function (){
					div.setAttribute('data-slide', 'prev')
				};
				scope.next = function (){
					div.setAttribute('data-slide', 'next')
				};
				scope.currentIndex = 0;
				scope.next = function(){
					scope.currentIndex < scope.images.length - 1 ? scope.currentIndex++ : scope.currentIndex = 0;
				};
				scope.prev = function(){
					scope.currentIndex > 0 ? scope.currentIndex-- : scope.currentIndex = scope.images.length - 1;
				};
				scope.$watch('currentIndex', function() {
					scope.images.forEach(function(image) {
						image.visible = false;
					});
					scope.images[scope.currentIndex].visible = true;
				});
				var timer;
				var sliderFunc = function() {
					timer = $timeout(function() {
						scope.next();
						timer = $timeout(sliderFunc, 6000);
					}, 6000);
				};
				sliderFunc();
				scope.$on('$destroy', function() {
					$timeout.cancel(timer); // when the scope is getting destroyed, cancel the timer
				});
			},
		};
	});