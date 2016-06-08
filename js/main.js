$(document).ready(function() {
	$('.navbar').addClass('animated slideInDown');
	$('.intro-click').on('click', function() {
		setTimeout(function(){
			window.location.href='index.html'}, 
			500
		);
	$('.navbar').addClass('animated slideOutUp');
	});
	$('.about-click').on('click', function() {
		setTimeout(function(){
			window.location.href='about.html'}, 
			500
		);
	$('.navbar').addClass('animated slideOutUp');
	});
	$('.resume-click').on('click', function() {
		setTimeout(function(){
			window.location.href='resume.html'}, 
			500
		);
	$('.navbar').addClass('animated slideOutUp');
	});
});