(function() { // <-- IIFE
var app = angular.module("sixYearOldApp");

app.factory("randomService", function() {

    var words = [
        "play",
        "ice cream",
        "snack",
        "read me a story",
        "again",
        "booger"
    ];

    var classes = [
        "dotted",
        "colored-blue",
        "colored-purple",
        "colored-red",
        "wide",
        "dark"
    ];

    function randomItemFrom(array) {
        return array[randomNumber(array.length)];
    }

    function randomNumber(maxExclusive) {
        return Math.floor(Math.random() * maxExclusive);
    }

    return {
        getRandomWord: function() {
            return randomItemFrom(words);
        },
        getRandomClass: function() {
            return randomItemFrom(classes);
        },
        getRandomNumberOfWords: function() {
            return randomNumber(10) + 1;
        }
    };
});
})();
