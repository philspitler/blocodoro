'use strict';

/**
 * @ngdoc function
 * @name blocodoroApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the blocodoroApp
 */
angular.module('blocodoroApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
