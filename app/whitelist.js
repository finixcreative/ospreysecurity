angular.module('finixApp')
	.config(['$sceDelegateProvider', function($sceDelegateProvider){
		$sceDelegateProvider.resourceUrlWhitelist([
			// Allow same origin resource loads.
			'self',
			// Allow loading from our assets domain.  Notice the difference between * and **.
			'https://www.google.com/**',
			'https://twitter.com/**'
		]);
	}])
;