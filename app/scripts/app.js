'use strict';

/**
 * @ngdoc overview
 * @name blocodoroApp
 * @description
 * # blocodoroApp
 *
 * Main module of the application.
 */
angular
  .module('blocodoroApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/shortBreak', {
        templateUrl: 'views/shortbreak.html',
        controller: 'ShortbreakCtrl'
      })
      .when('/longBreak', {
        templateUrl: 'views/longbreak.html',
        controller: 'LongbreakCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
