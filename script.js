var slideout;
$(document).ready(function () {
    slideout = new Slideout({
        'panel': document.getElementById('my-panel'),
        'menu': document.getElementById('menu'),
        'padding': 200,
        'tolerance': 30,
        'easing': 'cubic-bezier(.32,2,.55,.27)'
    });

    setTimeout(function () {
        $('body').addClass('loaded');
        $('h1').css('color', '#222222');
    }, 1200);

});

window.onload = function () {
    if (slideout && screen.width >= 720) {
        slideout.toggle();
    }
};

jQuery(function ($) {

    $('.toggle-button').on('click', function () {
        slideout.toggle();
    });

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

});

function loadServicesContent() {
    $('#content-placeholder').load('services.html');
    handleOverflow(false);
}

function loadGalleryContent() {
    $('#content-placeholder').load('gallery.html').attr('style', 'height: 110vh !important');
    handleOverflow(true);
}

function loadHomeContent() {
    $('#content-placeholder').load('home.html');
    handleOverflow(false);
}

function loadContactContent() {
    $('#content-placeholder').load('contact-us.html');
    handleOverflow(false);
}

function loadAboutContent() {
    $('#content-placeholder').load('about.html');
    handleOverflow(false);
}

function toogleMenu() {
    if (slideout && screen.width <= 700) {
        slideout.toggle();
    }
}

function handleOverflow(isGallery) {
    toogleMenu();
    if (isGallery || screen.width <= 700) {
        $('.div-most-outer').attr('style', 'overflow-y: scroll; margin-bottom:40px');
    } else {
        $('.div-most-outer').attr('style', 'overflow-y: hidden; margin-bottom:0');
    }
}