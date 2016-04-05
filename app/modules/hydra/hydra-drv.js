/*
HYDRA | Replicating module generates dynamic elements based on page content data.
© 2015 Finix, all rights reserved.
*/
angular.module('hydraMod', [])
	.directive('hydra', function(){
		return {
			restrict: 'E',
			replace: true,
			templateUrl: 'app/modules/hydra/hydra.html'
			/*
			transclude: true,
			link: function(scope, el, attrs, ctrl, transclude){
				el.find('.transclude').append(transclude());
			}
			*/
		};
	})
;