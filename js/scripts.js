var replaceWord = function(string, wordToReplace, newWord) {
  var stringArray = string.toLowerCase().replace(/[.,-\/#!?$%\^&\*;:{}=\-_`~()]/g,"").split(" ");
  for (var i = 0; i < stringArray.length; i++) {
    if (stringArray[-1] === wordToReplace) {
      alert(wordToReplace + 'is not in the sentence!');
    } else {
      if (stringArray[i] === wordToReplace) {
      stringArray[i] = newWord;
      };
    };
  };
    string = stringArray.join(' ');
    return string.charAt(0).toUpperCase() + string.substring(1);
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
