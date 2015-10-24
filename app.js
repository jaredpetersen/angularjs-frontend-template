'use strict';

var app = angular.module('tangram', ['ngRoute']);

// configure our routes
app.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'views/home.html',
            controller  : 'MainController'
        })

        // route for the about page
        .when('/about', {
            templateUrl : 'views/about.html',
            controller  : 'AboutController'
        })

        // route for the contact page
        .when('/contact', {
            templateUrl : 'views/contact.html',
            controller  : 'ContactController'
        });
});
