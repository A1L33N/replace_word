var replaceWord = function(string, wordToReplace, newWord) {
  var stringArray = string.toLowerCase().replace(/[.,-\/#!?$%\^&\*;:{}=\-_`~()]/g,"").split(" ");
  for (var i = 0; i < stringArray.length; i++) {
    if (stringArray[i] === wordToReplace) {
      stringArray[i] = newWord;
    };
  };
    string = stringArray.join(' ');
    return string.charAt(0).toUpperCase() + string.substring(1);

};

var containsWord = function contains(string, wordToReplace) {
  var stringArray = string.toLowerCase().replace(/[.,-\/#!?$%\^&\*;:{}=\-_`~()]/g,"").split(" ");
  for (var i = 0; i < stringArray.length; i++) {
    if (stringArray[i] === wordToReplace) {
      return true;
    };
  };
  return false;
};

$(document).ready(function() {
  $('form#word-sub').submit(function(event){
    var string = ($('input#string').val());
    var wordToReplace = ($('input#word-to-replace').val());
    var newWord = ($('input#new-word').val());

    var result = replaceWord(string, wordToReplace, newWord);

    $('#result').text(result);

    $('.result').show();
    event.preventDefault();
  });
});
