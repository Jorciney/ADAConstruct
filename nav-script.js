// animation
jQuery.noConflict()(function () {
    $('#sidebar').on('click', 'a', function () {

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
    $('#nav').on('click', 'a', function () {

        //         Animation: fadeIn
        $('#content-placeholder').css({
            "opacity": "0",
            "display": "block",
        }).delay(250).show().animate({
            opacity: 1
        });

    });
    $("#menu-toggle").click(function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("active");

        //		Here we are going to change the icon of #menu-toggle depending on the active class at that momment.
        var classList = $('#main_icon').attr('class').split(/\s+/);
        $.each(classList, function (index, item) {
            if (item === 'fa-bars') {
                $('#main_icon').removeClass('fa fa-bars');
                $('#main_icon').addClass('fa fa-toggle-off');
                $('#main_icon').css('font-size', '100%');

                //align the nav text to the center when menu is shown
                $('.main-nav li a').css('text-align', 'center');
                $('.main-nav li').css('margin', '0px auto 0px auto');

                $('#logo').show();
            }
            //When the menu is open
            if (item === 'fa-toggle-off') {
                $('#main_icon').removeClass('fa fa-toggle-off');
                $('#main_icon').addClass('fa fa-bars');
                $('#main_icon').css('font-size', '100%');
                //align the nav text to the left when menu is hidden
                $('.main-nav li a').css('text-align', 'left');
                $('.main-nav li').css('margin', '-20px');

                $('#logo').hide();
            }
        });
    });

});


function loadServicesContent() {
    document.getElementById('content-placeholder').innerHTML = '<object type=\'text/html\' style="min-width:100%; min-height: 101%; overflow:hidden; height:100%; width:100%"  data=\'services.html\' ></object>';
}

function loadGalleryContent() {
    document.getElementById('content-placeholder').innerHTML = '<object type=\'text/html\' style="min-width:100%; min-height: 101%; overflow:hidden;height:100%;" data=\'gallery.html\' ></object>';
}

function loadHomeContent() {
    document.getElementById('content-placeholder').innerHTML = '<object type=\'text/html\' style="min-width:100%; min-height: 101%; overflow:hidden height:100%;" data=\'index.html\' ></object>';
}
