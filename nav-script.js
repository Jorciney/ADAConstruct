jQuery.noConflict()(function () {
    $('#nav').on('click', 'a', function () {
        $('#content-placeholder').hide(600);
        // fade in new selected subcontent
        $('#content-placeholder').show(600);
    });
});

function loadServicesContent() {
            document.getElementById('content-placeholder').innerHTML = '<object type=\'text/html\' style="min-width:100%; min-height: 101%; overflow:hidden;"  data=\'services.html\' ></object>';
        }

        function loadGalleryContent() {
            document.getElementById('content-placeholder').innerHTML = '<object type=\'text/html\' style="min-width:100%; min-height: 101%; overflow:hidden;" data=\'gallery.html\' ></object>';
        }
        function loadHomeContent() {
            document.getElementById('content-placeholder').innerHTML = '<object type=\'text/html\' style="min-width:100%; min-height: 101%; overflow:hidden;" data=\'index.html\' ></object>';
        }

// $('#nav-gallery').click(function(){
//        $('html, body').animate({
//            scrollTop: $('#section-gallery').position().top },
//            1000
//        );
//    });

//$(function () {
//    $("#nav a").click(function (e) {
//        e.preventDefault();
//        $('html,body').scrollTo(this.hash, this.hash);
//    });
//});
