angular.module('coreMod')
	.config(function($sceDelegateProvider){
		$sceDelegateProvider.resourceUrlWhitelist(
			[
				// Allow same origin resource loads.
				'self',
				// Allow loading from outer templates domain.
				'http://finixcreative.github.io/web/**',
				'https://finixcreative.typeform.com/**',
				'https://www.youtube.com/embed/**',
				'https://**.vimeocdn.com/**'
			]
		);
	})
;