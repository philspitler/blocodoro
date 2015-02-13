'use strict';

/**
 * @ngdoc directive
 * @name blocodoroApp.directive:timer
 * @description
 * # timer
 */
angular.module('blocodoroApp')
.directive('timer', function ($interval, $window) {
  return {
    templateUrl: 'views/timer.html',
    restrict: 'E',
    scope: {
      timerInfo: '=length'
    },
    link: function postLink(scope, element, attrs) {
      //element.text(scope.duration.seconds());
      var millis = function (seconds) {
        return seconds * 1000;
      };

      var oneSecond = millis(1);

      var time = millis(attrs.length);

      var counter = time / oneSecond;

      var interval;

      var setTimer = function () {
        var duration = $window.moment.duration(time);
        scope.timerdata = ('0' + duration.minutes()).slice(-2) + ':' + ('0' + duration.seconds()).slice(-2);
        time -= oneSecond;
      };

      setTimer();

      scope.start = function () {
        interval = $interval(setTimer, oneSecond, counter);
      };

      scope.stop = function () {
        $interval.cancel(interval);
      };

      scope.reset = function () {
        scope.stop();
        time = millis(attrs.length);
        setTimer();
      };
    }
  };
});
