$(document).ready(function () {

    setTimeout(function () {
        $('body').addClass('loaded');
        $('h1').css('color', '#222222');
    }, 1200);

});

jQuery(function ($) {

    $('#sidebar').on('click', 'a', function () {
        //         Animation: fadeIn
        $('#content-placeholder').css({
            "opacity": "0",
            "display": "block"
        }).delay(250).show().animate({
            opacity: 1
        });

    });
    $('.btn').click(function () {

        //         Animation: fadeIn
        $('#content-placeholder').css({
            "opacity": "0",
            "display": "block"
        }).delay(250).show().animate({
            opacity: 1
        });
    });


    var $bodyEl = $('body'),
        $sidedrawerEl = $('#sidedrawer');


    function showSidedrawer() {
        // show overlay
        var options = {
            onclose: function () {
                $sidedrawerEl
                    .removeClass('active')
                    .appendTo(document.body);
            }
        };

        var $overlayEl = $(mui.overlay('on', options));

        // show element
        $sidedrawerEl.appendTo($overlayEl);
        setTimeout(function () {
            $sidedrawerEl.addClass('active');
        }, 20);
    }


    function hideSidedrawer() {
        $bodyEl.toggleClass('hide-sidedrawer');
    }


    $('.js-show-sidedrawer').on('click', showSidedrawer);
    $('.js-hide-sidedrawer').on('click', hideSidedrawer);
});

function loadServicesContent() {
    $('#content-placeholder').load('services.html');
    hideSideDrawer();
}

function loadGalleryContent() {
    $('#content-placeholder').load('gallery.html');
    hideSideDrawer();
}

function loadHomeContent() {
    $('#content-placeholder').load('home.html');
    hideSideDrawer();
}

function loadContactContent() {
    $('#content-placeholder').load('contact-us.html');
    hideSideDrawer();
}

function loadAboutContent() {
    $('#content-placeholder').load('about.html');
    hideSideDrawer();
}

function hideSideDrawer() {
    var menu = document.querySelector('#sidedrawer'); // Using a class instead, see note below.
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
    }

}
