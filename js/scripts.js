var replaceWord = function(string, wordToReplace, newWord) {
  var stringArray = string.toLowerCase().replace(/[.,-\/#!?$%\^&\*;:{}=\-_`~()]/g,"").split(" ");
  for (var i = 0; i = stringArray.length; i++) {
    if (stringArray[i] === wordToReplace) {
      stringArray[i] = newWord
    };
  };
};
