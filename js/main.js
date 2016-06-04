$(document).ready(function() {
	var workHeight = $('.section-fixed').height();
	$('.certification').css('margin-top', workHeight + 100);
	$(window).resize(function() {
		workHeight = $('.section-fixed').height();
		$('.certification').css('margin-top', workHeight + 100);
	});
	
	$('.nav-item').on('click', function() {
		$('.navbar').addClass('animated fadeOutUp');
	});
});