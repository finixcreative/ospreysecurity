$(function() {
	// var mainbottom = $('#main').offset().top + $('#main').height();
	$(window).on('scroll',function(){
		distance = Math.round($(window).scrollTop());
		if (distance > 1) {
			$('header').addClass('white-bg');
		} else {
			$('header').removeClass('white-bg');
		}
	});
});

/*
window.onscroll = function(){
	headerScroll();
};
function headerScroll(){
	if(document.body.scrollTop > 100% || document.documentElement.scrollTop > 100%){
		document.getElementsByTagName("header").className = "test";
	} else {
		document.getElementsByTagName("header").className = "";
	}
};
*/