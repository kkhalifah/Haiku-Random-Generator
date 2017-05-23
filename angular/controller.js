(function() { // <-- It's an IIFE
//module
  var app = angular.module('haikuModule', []);
//controller
app.controller('haikuController', function($scope, haikuFactory, $http){
  console.log("controller is connected");
    $scope.fiveSyllablesFirst = [];

  $scope.addFiveSyllablesFirst = function() {
      $scope.fiveSyllablesFirst.push(
          haikuFactory.getRandomFirstLine()
      );
  };

});
// end of IIFE
})();
