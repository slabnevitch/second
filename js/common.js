$(function() {

	//Toggle menu
	$('.hamburger').click(function(e) {
		e.preventDefault();
		var mobMenu = $('.menu__list');
		$(this).toggleClass('is-active');
		mobMenu.slideToggle();
	});

	//Popup
	$('.button-popup').magnificPopup({
		 items: {
		      src: '#form'
		    }
		
	});

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	
	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
