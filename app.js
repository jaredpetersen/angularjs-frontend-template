'use strict';

var app = angular.module('angularjs-frontend', ['ui.router']);

// configure our routes
app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider

        // route for the home page
        .state('home', {
            url: '/',
            templateUrl : 'views/home.html',
            controller  : 'MainController'
        })

        // route for the about page
        .state('about', {
            url: '/about',
            templateUrl : 'views/about.html',
            controller  : 'AboutController'
        })

        // route for the contact page
        .state('contact', {
            url: '/contact',
            templateUrl : 'views/contact.html',
            controller  : 'ContactController'
        });
});
