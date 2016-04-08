angular.module('coreMod')
	.directive('twitterfeed', function(){
		function getFeed(d, s, id){
			var js,
				fjs = d.getElementsByTagName(s)[0],
				p = /^http:/.test(d.location) ? 'http' : 'https';
			if(!d.getElementById(id)){
				js = d.createElement(s);
				js.id = id;
				js.src = p + "://platform.twitter.com/widgets.js";
				fjs.parentNode.insertBefore(js,fjs);
			}
		}
		getFeed(document, "script", "twitter-wjs");
		return {
			restrict: 'E',
			templateUrl: 'app/modules/twitterfeed/twitterfeed.html'
		};
	})
;