
/*---
1. Computer picks random word from adventureWords array
2. The picked word is saved as the answerWord
3. Change the answerWord to _ (secretWord) for it to show up
4. If wrong, hangman is drawn (6 tries with images)
5. Store and update secretWord if correct
6. If secretWord is equal to answerWord, alert winner
---*/

/*--- Variables ---*/

var adventureWords = ['finn the human', 'jake the dog', 'princess bubblegum', 'ice king', 'lumpy space princess', 'beemo', 'lady rainicorn'];
var cartoonIds = ['#finn', '#jake', '#princess', '#iceking', '#lumpy','#beemo', '#rainicorn'];
var answerWord;
var secretWord;
var badGuesses;

/*--- Event listeners ---*/

$('#play-button').on('click', startGame);

$('#alphabet').on('click', 'button', handleLetter);

/*--- functions ---*/

function startGame() {
  chosenLetters = [];
  badGuesses = [];
  answerWord = adventureWords[Math.floor(Math.random() * adventureWords.length)];
  secretWord = initSecretWord();
  $('#alphabet button').removeAttr('disabled');
  $('#hangman').show();
  $('#alphabet').show();
  $('#lemongrab').hide();
  cartoonIds.forEach(function(id) {
    $(id).hide();
  });
  render();
}

function initSecretWord() {
  var result = '';
  for (var i = 0; i < answerWord.length; i++) {
    result += (answerWord[i] === ' ') ? ' ' : '_';
  }
  return result;
}

function render() {
  $('#hangman').attr('src', `images/${badGuesses.length}.png`);
  if (badGuesses.length === 6) {
    $('#alert-messages').hide();
    $('#lives').text("WHO KILLED LEMONGRAB?");
    $('#alphabet').hide();
    $('#word-box').text(answerWord);
    $(cartoonIds[adventureWords.indexOf(answerWord)]).delay(1000).fadeIn();
  } else {
    $('#main-hangman').show();
    $('#alert-messages').show();
    $('#word-box').text(secretWord);
    $('#lives').text(`${6 - badGuesses.length} CHANCES LEFT`);
  }
}

function handleLetter(evt) {
  letter = evt.target.id.toLowerCase();
  evt.target.disabled = true;
  if (answerWord.includes(letter)) {
    replaceUnderscoresWithLetter(letter);
  } else {
    badGuesses.push(letter);
  }
  checkForWin();
  render();
}

function checkForWin() {
  if (secretWord === answerWord) {
    $('#alert-messages').text("LEMONGRAB LIVES ANOTHER DAY!");
    $('#lives').hide();
    $('#hangman').hide();
    $('#alphabet').hide();
    $('#lemongrab').delay(200).fadeIn();
    $(cartoonIds[adventureWords.indexOf(answerWord)]).delay(400).fadeIn();
  } else {
    $('#alert-messages').text("SAVE LEMONGRAB");
  }
}

function replaceCharAt(str, idx, char) {
  return str.substr(0, idx) + char + str.substr(idx +1);
}

function replaceUnderscoresWithLetter(letter) {
  var copiedWord = answerWord;
  while (copiedWord.indexOf(letter) > -1) { // if letter is not there
    var idx = copiedWord.indexOf(letter);
    secretWord = replaceCharAt(secretWord, idx, letter);
    copiedWord = replaceCharAt(copiedWord, idx, ' ');
  }
  render();
}



startGame();


