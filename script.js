var slideout;
var navMenu;
$(document).ready(function () {
    navMenu = document.getElementById('menu');
    slideout = new Slideout({
        'panel': document.getElementById('my-panel'),
        'menu': document.getElementById('menu'),
        'padding': 200,
        'tolerance': 30,
        'easing': 'cubic-bezier(.5,.5,.5,.5)'
    });

    setTimeout(function () {
        $('body').addClass('loaded');
        $('h1').css('color', '#222222');
    }, 1200);

});

window.onload = function () {
    if (slideout && screen.width >= 720) {
        slideout.toggle();
        navMenu.setAttribute('class', 'slide-in');    }
};

jQuery(function ($) {

    $('.toggle-button').on('click', function () {

slideMenu();

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

function toggleMenu() {
    if (slideout && screen.width <= 700) {
        slideMenu();
    }
}

function slideMenu(){
    var isOpen = navMenu == null ? true : navMenu.classList.contains('slide-in');
    navMenu.setAttribute('class', isOpen ? 'slide-out' : 'slide-in');
    slideout.toggle();
}
