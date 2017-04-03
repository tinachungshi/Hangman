
/*-- Steps for 1 player
1. Computer picks random word from adventureWords array
  - (Later) How to make sure that random word isn't repeated right after the other?
2. The picked word is saved as the chosenWord
3. Change the chosenWord to _ for it to show up (?)
  - (?) How to make spaces not do _

3. Start game, render, hangman divs, alphabets/answer box show on screen
4. Display word length to Player 2
5. Get letter from Player 2, store and update it into var wrongLetters if wrong
6. If wrong, hangman is drawn (7 tries with images)
6. Store and update chosenLetters if correct
7. If chosenLetters is equal to answer, alert winner
*/

/*--Variables--*/

// Array with words
var adWords = ['finn the human', 'jake the dog', 'princess bubblegum', 'ice king', 'lumpy space princess', 'earl of lemongrab', 'beemo', 'lady rainicorn'];
var underscores = '';
var spaces = ' ';

var answerWord;
var chosenLetters = [];
var wrongLetters = [0, 0, 0, 0, 0, 0, 0];
// var answerWord = console.log(chooseWord(adventureWords));

// To pick a word randomly from array of adventureWords
function chooseWord(adWords) {
  return adWords[Math.floor(Math.random() * adWords.length)];
};

// Change the word into _
function blankWord(answerWord) {
  var result = '';
  for (var i = 0; i < answerWord.length; i++) {
    result += ' _';
  }
  return result;
}

// // Trying to turn word into _ and spaces into spaces
// function blankWord(answerWord) {
//   var result = '';
//   for (var i = 0; i < answerWord.length; i++) {
//     if (result = '') {
//       result += '_';
//     } else if (result = ' ') {
//       result += ' ';
//     }
//   return result;
//   }
// }


