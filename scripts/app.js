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
  .module('blocodoroApp', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .when('/about', {
        templateUrl: 'views/about.html'
      })
      .when('/shortBreak', {
        templateUrl: 'views/shortbreak.html'
      })
      .when('/longBreak', {
        templateUrl: 'views/longbreak.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
