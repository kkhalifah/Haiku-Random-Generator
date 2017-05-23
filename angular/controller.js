(function() { // <-- It's an IIFE
//module
  var app = angular.module('haikuModule', []);
//controller
app.controller('haikuController', function($scope, haikuFactory, $http){
  console.log("controller is connected");

  $scope.displayPoem = function() {
//arr to repeat
      $scope.finalPoem =
          haikuFactory.poem();
  };

});
// end of IIFE
})();
