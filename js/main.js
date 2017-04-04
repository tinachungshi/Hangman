
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
  loseImageToggle();
  checkForWin();
  // render();
}

function loseImageToggle() {
  if (badGuesses.length === 1) {
    $(`#lives`).text("5 CHANCES LEFT");
    $(`#image0`).hide();
    $(`#image1`).show();
  } else if (badGuesses.length === 2) {
    $(`#lives`).text("4 CHANCES LEFT");
    $(`#image1`).hide();
    $(`#image2`).show();
  } else if (badGuesses.length === 3) {
    $(`#lives`).text("3 CHANCES LEFT");
    $(`#image2`).hide();
    $(`#image3`).show();
  } else if (badGuesses.length === 4) {
    $(`#lives`).text("2 CHANCES LEFT");
    $(`#image3`).hide();
    $(`#image4`).show();
  } else if (badGuesses.length === 5) {
    $(`#lives`).text("1 CHANCES LEFT");
    $(`#image4`).hide();
    $(`#image5`).show();
  } else if (badGuesses.length === 6) {
    $(`#alert-messages`).hide();
    $(`#lives`).text("YOU KILLED LEMONGRAB");
    $(`#alphabet`).hide();
    $(`#image5`).hide();
    $(`#image6`).show();
    } if (answerWord === "finn the human" && badGuesses.length === 6) {
        $(`#word-box`).text(answerWord);
        $(`#image6`).delay(1500).fadeOut();
        $(`#finn`).delay(2000).fadeIn();
      } else if (answerWord === "jake the dog" && badGuesses.length === 6) {
        $(`#word-box`).text(answerWord);
        $(`#image6`).delay(1500).fadeOut();
        $(`#jake`).delay(2000).fadeIn();
      } else if (answerWord === "princess bubblegum" && badGuesses.length === 6) {
        $(`#word-box`).text(answerWord);
        $(`#image6`).delay(1500).fadeOut();
        $(`#princess`).delay(2000).fadeIn();
      } else if (answerWord === "ice king" && badGuesses.length === 6) {
        $(`#word-box`).text(answerWord);
        $(`#image6`).delay(1500).fadeOut();
        $(`#iceking`).delay(2000).fadeIn();
      } else if (answerWord === "lumpy space princess" && badGuesses.length === 6) {
        $(`#word-box`).text(answerWord);
        $(`#image6`).delay(1500).fadeOut();
        $(`#lumpy`).delay(2000).fadeIn();
      } else if (answerWord === "earl of lemongrab" && badGuesses.length === 6) {
        $(`#word-box`).text(answerWord);
        $(`#image6`).delay(1500).fadeOut();
        $(`#lemongrab`).delay(2000).fadeIn();
      } else if (answerWord === "beemo" && badGuesses.length === 6) {
        $(`#word-box`).text(answerWord);
        $(`#image6`).delay(1500).fadeOut();
        $(`#beemo`).delay(2000).fadeIn();
      } else if (answerWord === "lady rainicorn" && badGuesses.length === 6) {
        $(`#word-box`).text(answerWord);
        $(`#image6`).delay(1500).fadeOut();
        $(`#rainicorn`).delay(2000).fadeIn();
      }
}

function checkForWin() {
  if (secretWord === answerWord) {
    $(`#alert-messages`).text("LEMONGRAB LIVES ANOTHER DAY!");
    $(`#alphabet`).hide();
    $(`#lives`).hide();

  } else {
    $(`#alert-messages`).text("LEMONGRAB IS DYING");
  }
}


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





startGame();


