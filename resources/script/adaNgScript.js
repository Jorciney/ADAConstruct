//define the myApp variable
var myApp = angular.module('myApp', ["ngAnimate"]);

//controller
myApp.controller('MainController', ['$scope', function ($scope) {
    var images = [
        'ada1.jpg',
        'ada2.jpg',
        'ada3.jpg',
        'ada4.jpg',
        'ada5.jpg',
        'ada6.jpg',
        'ada7.jpg',
        'ada8.jpg',
        'ada9.jpg',
        'ada10.jpg',
        'ada11.jpg',
        'ada12.jpg',
        'ada13.jpg',
        'ada14.jpg',
        'ada15.jpg',
        'ada16.jpg',
        'ada17.jpg',
        'ada18.jpg',
        'ada19.jpg',
        'ada20.jpg',
        'ada21.jpg',
        'ada22.jpg',
        'ada23.jpg',
        'ada24.jpg',
        'ada25.jpg',
        'ada26.jpg',
        'ada27.jpg'
    ];

    $scope.imageNames = images;
    $scope.includeHome = true;
    $scope.includeServices = false;
    $scope.includeGallery = false;
    $scope.includeContact = false;
    $scope.includeAbout = false;
    $scope.homePath = "home.html";
    $scope.servicesPath = "services.html";
    $scope.galleryPath = "gallery.html";
    $scope.aboutPath = "about.html";
    $scope.contactPath = "contact-us.html";

    $scope.showGallery = function () {
        $scope.includeGallery = true;
        $scope.includeServices = false;
        $scope.includeHome = false;
        $scope.includeContact = false;
        $scope.includeAbout = false;
    };

    $scope.showServices = function () {
        $scope.includeGallery = false;
        $scope.includeServices = true;
        $scope.includeHome = false;
        $scope.includeContact = false;
        $scope.includeAbout = false;

    };

    $scope.showHome = function () {
        $scope.includeGallery = false;
        $scope.includeServices = false;
        $scope.includeHome = true;
        $scope.includeContact = false;
        $scope.includeAbout = false;
    };
    $scope.showContact = function () {
        $scope.includeGallery = false;
        $scope.includeServices = false;
        $scope.includeHome = false;
        $scope.includeContact = true;
        $scope.includeAbout = false;
    };
    $scope.showAbout = function () {
        $scope.includeGallery = false;
        $scope.includeServices = false;
        $scope.includeHome = false;
        $scope.includeContact = false;
        $scope.includeAbout = true;
    }
}]);