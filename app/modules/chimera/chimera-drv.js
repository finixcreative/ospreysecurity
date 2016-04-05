/*
CHIMERA | Shapeshifter module accepts dynamic route parameter to fetch page content data.
© 2015 Finix, all rights reserved.
*/
angular.module('chimeraMod', [])
	.directive('chimera', function(){
		return {
			restrict: 'E',
			replace: true,
			templateUrl: 'app/modules/chimera/chimera.html',
		};
	})
;