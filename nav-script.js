// animation
jQuery.noConflict()(function () {
	$('#nav').on('click', 'a', function () {

		//         Animation: fadeIn
		$('#content-placeholder').css({
			"opacity": "0",
			"display": "block",
		}).delay(250).show().animate({
			opacity: 1
		});

	});
});
jQuery(document).ready(function ($) {
	$("#menu-toggle").click(function (e) {
		e.preventDefault();
		$("#wrapper").toggleClass("active");
		
//		Here we are going to change the icon of #menu-toggle depending on the active class at that momment.
		var classList = $('#main_icon').attr('class').split(/\s+/);
		$.each(classList, function (index, item) {
			if (item === 'glyphicon-align-justify') {
				$('#main_icon').removeClass('glyphicon-align-justify');
				$('#main_icon').addClass('glyphicon-chevron-left');
				
				//align the nav text to the center when menu is shown
				$('.main-nav li a').css('text-align', 'center');
				
				$('#logo').show();
			}
			//When the menu is open
			if (item === 'glyphicon-chevron-left') {
				$('#main_icon').removeClass('glyphicon-chevron-left');
				$('#main_icon').addClass('glyphicon-align-justify');
				
				//align the nav text to the left when menu is hidden
				$('.main-nav li a').css('text-align', 'left');
				
				$('#logo').hide();
			}
		});
	});

});


function loadServicesContent() {
	document.getElementById('content-placeholder').innerHTML = '<object type=\'text/html\' style="min-width:100%; min-height: 101%; overflow:hidden; height:100%;"  data=\'services.html\' ></object>';
}

function loadGalleryContent() {
	document.getElementById('content-placeholder').innerHTML = '<object type=\'text/html\' style="min-width:100%; min-height: 101%; overflow:hidden;height:100%;" data=\'gallery.html\' ></object>';
}

function loadHomeContent() {
	document.getElementById('content-placeholder').innerHTML = '<object type=\'text/html\' style="min-width:100%; min-height: 101%; overflow:hidden height:100%;" data=\'index.html\' ></object>';
}
