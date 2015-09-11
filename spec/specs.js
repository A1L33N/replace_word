describe('repaceWord', function() {
  it('will find a word in a string of words', function(){
    var string = 'The night is dark and full of terrors.';
    var wordToReplace = 'dark';
    var newWord = 'cold'
    expect(replaceWord(string, wordToReplace, newWord)).to.equal('The night is cold and full of terrors');
  });
});
