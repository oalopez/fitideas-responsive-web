$(document).ready(function() {
	
	redrawDotNav();
	
	/* Scroll event handler */
    $(window).bind('scroll',function(e){
    	parallaxScroll();
		redrawDotNav();
    });
    
	/* Next/prev and primary nav btn click handlers */
	$('a.section1').click(function(){
    	$('html, body').animate({
    		scrollTop:0
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
	});
    $('a.section2').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#section2').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
    $('a.section3').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#section3').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
	$('a.section4').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#section4').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
    
    /* Show/hide dot lav labels on hover */
    $('nav#primary a').hover(
    	function () {
			$(this).prev('h1').show();
		},
		function () {
			$(this).prev('h1').hide();
		}
    );
    
});

/* Scroll the background layers */
function parallaxScroll(){
	var scrolled = $(window).scrollTop();
	$('#parallax-bg1').css('top',(0-(scrolled*.35))+'px');
	$('#parallax-bg2').css('top',(0-(scrolled*.5))+'px');
	$('#parallax-bg3').css('top',(0-(scrolled*.75))+'px');
}

/* Set navigation dots to an active state as the user scrolls */
function redrawDotNav(){
	var Top =  0;
	// The top of each section is offset by half the distance to the previous section.
	var section2Top =  $('#section2').offset().top - (($('#section3').offset().top - $('#section2').offset().top) / 2);
	var section3Top =  $('#section3').offset().top - (($('#section4').offset().top - $('#section3').offset().top) / 2);
	var section4Top =  $('#section4').offset().top - (($(document).height() - $('#section4').offset().top) / 2);;
	$('nav#primary a').removeClass('active1');
	$('nav#primary a').removeClass('active2');
	$('nav#primary a').removeClass('active3');
	$('nav#primary a').removeClass('active4');
	if($(document).scrollTop() >= Top && $(document).scrollTop() < section2Top){
		$('nav#primary a.section1').addClass('active1');
	} else if ($(document).scrollTop() >= section2Top && $(document).scrollTop() < section3Top){
		$('nav#primary a.section2').addClass('active2');
	} else if ($(document).scrollTop() >= section3Top && $(document).scrollTop() < section4Top){
		$('nav#primary a.section3').addClass('active3');
	} else if ($(document).scrollTop() >= section4Top){
		$('nav#primary a.section4').addClass('active4');
	}
	
}