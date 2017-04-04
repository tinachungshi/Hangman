
/*--- Steps for 1 player
1. Computer picks random word from adventureWords array
  - (Later) How to make sure that random word isn't repeated right after the other?
2. The picked word is saved as the chosenWord
3. Change the chosenWord to _ for it to show up
4. If wrong, hangman is drawn (6 tries with images)
5. Store and update chosenLetters if correct
6. If chosenLetters is equal to answer, alert winner
---*/

/*--- Variables ---*/

// Array with words
var adventureWords = ['finn the human', 'jake the dog', 'princess bubblegum', 'ice king', 'lumpy space princess', 'earl of lemongrab', 'beemo', 'lady rainicorn'];

var answerWord;
var secretWord;
var chosenLetters;
var badGuesses;

/*--- Event listeners ---*/

// resets game
$(`#play-button`).on('click', function() {
  document.location.reload(true);
});

// gets alphabet that's clicked
$(`#alphabet`).on('click', 'button', handleLetter);

// bring up images when wrong


/*--- functions ---*/

function startGame() {
  chosenLetters = [];
  badGuesses = [];
  // grab random phrase
  answerWord = adventureWords[Math.floor(Math.random() * adventureWords.length)];
  secretWord = initSecretWord();
  console.log(answerWord)
  console.log(secretWord)
  render();
}

// turns phrase into _ and spaces
function initSecretWord() {
  var result = '';
  for (var i = 0; i < answerWord.length; i++) {
    result += (answerWord[i] === ' ') ? ' ' : '_';
  }
  return result;
}

function render() {
// bring the alphabet into display
  $(`#word-box`).text(secretWord);
}


// gets the letter when clicked, if letter is in word sends to
  // replaceUnderscoresWithLetter func, if not in word pushes to badGuesses
function handleLetter(evt) {
  letter = evt.target.id.toLowerCase();
  evt.target.disabled = true;
  // if letter in answerWord
  if (answerWord.includes(letter)) { // make sure to check same 'case'
    replaceUnderscoresWithLetter(letter);
    // index of with starting position
    // replace all occurances
    // maybe fn is called replaceUnderscoresWithLetter(letter)
  } else {
    badGuesses.push(letter);

  }
  // console.log('badGuesses',badGuesses);
  // if won
    // set winning message or var
  // otherwise if loss
    // set loser message or var
  // render();
}

//
function replaceCharAt(str, idx, char) {
  return str.substr(0, idx) + char + str.substr(idx +1);
}

// gets the answerWord, makes a copy of it, replaces underscore with letter
function replaceUnderscoresWithLetter(letter) {
  var copiedWord = answerWord;
  while (copiedWord.indexOf(letter) > -1) { // if letter is not there
    var idx = copiedWord.indexOf(letter);
    secretWord = replaceCharAt(secretWord, idx, letter);
    copiedWord = replaceCharAt(copiedWord, idx, ' ');
  }
  render();
}

// the hangman sequence
var hangmanSequence = [0, 1, 2, 3, 4, 5, 6];

startGame();

//

