// var mainbottom = $('#main').offset().top + $('#main').height();
function headerScroll(){
	$(window).on('scroll',function(){
		distance = Math.round($(window).scrollTop());
		if (distance > 0) {
			$('header').addClass('white-bg');
		} else {
			$('header').removeClass('white-bg');
		}
	});
};
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