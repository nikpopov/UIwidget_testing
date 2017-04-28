$(document).ready(function() {
	$('#mainMenu > li').on('click', function(e) {
		console.log(this);
		$('#mainMenu > li').removeClass('active');
		$(this).addClass('active');
	})
})