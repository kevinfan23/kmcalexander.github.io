$(document).ready(function() {
	$('.navbar').addClass('animated fadeInDown');
	
	$('.intro-click').on('click', function() {
		setTimeout(function(){
			window.location.href='index.html'}, 
			500
		);
	$('.navbar').addClass('animated fadeOutUp');
	});
	$('.about-click').on('click', function() {
		setTimeout(function(){
			window.location.href='about.html'}, 
			500
		);
	$('.navbar').addClass('animated fadeOutUp');
	});
	$('.resume-click').on('click', function() {
		setTimeout(function(){
			window.location.href='resume.html'}, 
			500
		);
	$('.navbar').addClass('animated fadeOutUp');
	});
});