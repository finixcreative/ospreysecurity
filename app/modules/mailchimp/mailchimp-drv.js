angular.module('coreMod')
	.directive('mailchimp', function(){
		return {
			restrict: 'E',
			templateUrl: 'app/modules/mailchimp/mailchimp.html',
		};
	})
;