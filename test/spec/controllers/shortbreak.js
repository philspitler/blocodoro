'use strict';

describe('Controller: ShortbreakCtrl', function () {

  // load the controller's module
  beforeEach(module('blocodoroApp'));

  var ShortbreakCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ShortbreakCtrl = $controller('ShortbreakCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
