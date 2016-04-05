angular.module('coreMod')
	.factory('pluginFactory', function($q, $timeout) {
		return function() {
			var d = $q.defer();
			$timeout(function() {
				d.resolve('one');
			}, 1);
			return d.promise;
		};
	});