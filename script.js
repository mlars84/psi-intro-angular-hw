console.log('test');

var mattApp = angular.module('mattApp', []);

mattApp.controller('firstCntrlr', function() {

  // view model
  var vm = this;

  vm.someCoolThing = 'Stringystring!'
  vm.someOtherCoolThing = 'more strings to stringystying with.';

  vm.inputFun = '';

});
