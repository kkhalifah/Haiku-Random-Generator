var app = angular.module('haikuModule');

app.factory('haikuFactory', function(){
  //contains two things return and object literal
  //set and get function. {} hold data
  var line = {};
  //creating method; set data to the value of input
  function setLine (line){
    input = line;
    console.log(input);
  };
  //call function, return one var
    function returnInput (){
      return input
    };
    return {
      //property and value, one sets, one gets
      returnInput: returnInput,
      setInput: setInput
  }
});
