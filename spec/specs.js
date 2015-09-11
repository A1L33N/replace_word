describe('replaceWord', function() {
  it('will find a word with another word in a string of words', function(){
    var string = 'The night is dark and full of terrors.';
    var wordToReplace = 'dark';
    var newWord = 'cold'
    expect(replaceWord(string, wordToReplace, newWord)).to.equal('The night is cold and full of terrors');
  });
});

describe('containsWord', function() {
  it('will find a word in a string of words', function() {
    var string = 'The night is dark and full of terrors.';
    var wordToReplace = 'dark';
    expect(containsWord(string, wordToReplace)).to.equal(true);
  });
});
