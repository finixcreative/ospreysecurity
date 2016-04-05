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