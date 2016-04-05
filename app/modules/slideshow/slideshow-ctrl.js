angular.module('coreMod')
	.controller('SlideshowController', ['$scope', '$timeout', function($scope, $timeout){
		var timer,
			slideChange;
		$scope.currentIndex = 0;
		$scope.selectIndex = function(index){
			$scope.currentIndex = index;
		};
		$scope.isCurrentSlideIndex = function(index) {
			return $scope.currentIndex === index;
		};
		$scope.next = function(){
			$scope.currentIndex < $scope.contents.length - 1 ? $scope.currentIndex++ : $scope.currentIndex = 0;
		};
		$scope.prev = function(){
			$scope.currentIndex > 0 ? $scope.currentIndex-- : $scope.currentIndex = $scope.contents.length - 1;
		};
		for(var i = 0; i < $scope.contents.length; i++){
			$scope.contents[i].config.index = i;
			console.log($scope.contents[i].config.index);
		};
		$scope.$watch('currentIndex', function(){
			$scope.contents.forEach(function(content){
				content.config.visible = false;
			});
			$scope.contents[$scope.currentIndex].config.visible = true;
			console.log($scope.contents[$scope.currentIndex].config.visible);
		});
		$scope.$on('$destroy', function(){
			$timeout.cancel(timer);
		});
		slideChange = function(){
			timer = $timeout(function(){
				$scope.next();
				timer = $timeout(slideChange, 6000);
			}, 6000);
		};
		slideChange();
		console.log("Slides: " + $scope.contents);
	}])
;