
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

var answerWord;
var guessedWord;
var chosenLetters;
var wrongCount;

/*--- event listeners ---*/

$(`#playButton`).on('click', function() {
  startGame();
});





/*--- functions ---*/

function startGame() {
  chosenLetters = [];
  wrongCount = 0;
  // grab random phrase
  answerWord = adWords[Math.floor(Math.random() * adWords.length)];
  guessedWord = initGuessedWord();
  console.log(answerWord)
  console.log(guessedWord)
}

function initGuessedWord() {
  var result = '';
  for (var i = 0; i < answerWord.length; i++) {
    result += (answerWord[i] === ' ') ? ' ' : '_';
  }
  return result;
}

// function setLetter(letter) {
//   document.getElementById('alphabet').innerHTML = document.getElementById('alphabet').innerHTML + letter;
// }


