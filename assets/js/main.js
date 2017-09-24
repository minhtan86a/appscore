$(function() {
	$(window).on('scroll', function() {
		//var windowHeight = $( window ).height();;
		if ($(this).scrollTop() > 100) {
			$('.menu-top').addClass('menu-shrink');
		} else {
			$('.menu-top').removeClass('menu-shrink');
		}
	});

	$('.wrp_all:not(.navbar-collapse)').click(function() {
		$('.collapse').collapse('hide');
	});
});



											