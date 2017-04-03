
#PSEUDOCODE - PROJECT #1 Adventure Time Hangman

<h4>Variables</h4>

Variables:
1. var answer  
2. var wrongLetters = [0,0,0,0,0,0,0]  
3. var chosenLetters  

SIMPLE 1 PLAYER VERSION 
--------------

1. Create an array of words for computer to choose from
	- Chosen word is transformed into _ 
2. 

1. Receive word from Player 1, store it into variable answer.
2. Display word length to Player 2  
[LOOP]
3. Get letter from Player 2, store and update it into variable wrongLetters or chosenLetters
	- wrongLetters + 1
	- chosenLetters + 1
4. If chosenLetters is equal to the answer, alert winner.
5. If wrong, letter is stored into wrongLetters.  
6. Hangman is drawn [face, body, arm, arm, leg, leg, crown] with each wrong letter.
	- 7 tries
7. If player uses same letter twice, goes into wrongLetters box.



2 PLAYER LONG VERSION
------------

1. Load screen with images 
	- Hangman dock
	- Wrong letters box
	- Answer box
2. Listen for player's click on [Start Game]
3. Set it to player one's turn. 
 	- Player 1 inputs word into message box
	- Letters of word is stored into var answer 
	
4. Player 2 LOOP
	- Listen for current player's alphabet key
	- Check chosen alphabet to see if it's in the var answer
		- If letter is in var answer, store into var chosenLetters
			- chosenLetters shows up on main screen answer's box 
			- when chosenLetters match var answer, then alert winner.
		- If letter is not in var answer or same letter is used twice, store into var wrongLetters
			- wrongLetters will show up on main screen wrong answer's box
			- Hangman image in order of [Head, body, arm, arm, leg, leg, crown] display with each wrong letter
			- Each image will equal to 1
	- Check to see if wrongLetters array is all filled with 1
		-  If wrongLetters array is all filled with 1...
			-  complete image of Hangman will appear.
			-  You lose! message is loaded 


2 PLAYER USER STORY
----------

1. Welcome screen 
	- Load images
		- 	Hangman dock
		-  Alphabets
		-  Wrong letters box
		-  Answer box
		-  How many chances left ticker (7 chances count down)
	- Load theme message: Disney Hangman
	- Alphabet comes up in a box on the side
	- 	When alphabet is clicked, it gets stored and displayed on screen.
2. Player 1 to type in word for hangman 
	- Computer separates word into letters and stores it into an array
	- Computer generates proper amount of underscores for the word inputted
3. Player 2's turn 
	- Guesses alphabet, alphabet is striked through
	- Every right, the letter is displayed on screen in the answer box
	- Every wrong (7 chances), the letter is stored into wrong letters box
		- The hangman image comes out with every letter
			- Hangman image has 7 parts 
				- Face, Body, Arm, Arm, Leg, Leg, Crown
	- Once all the letters of the answer are guessed, display winning sign
	- After the entire hangman is displayed (7 wrong moves) then hangman is displayed on the hangman dock.
4. Reset button on the side 
	- To reset once game is over
	- To reset if player wants to change the word 

##1 PLAYER VERSION

###Variables:
1. var wordChoices = [{Adventure Time: Blah}, {Animals}, {Dogs}];
	- Computer chooses theme, word by random
2. var answerChosen = [The theme/word that was chosen by computer];
3. var wrongLetters
4. var chosenLetters 
5. var hangmanImages = [1.jpg, 2.jpg, ...]
6. var alphabetBox

###Pseudocode:

1. Load screen with images 
	- Hangman dock
	- Wrong letters box
	- Answer box
	- Alphabet box
2. Listen for player's click on [Start Game]
3. Box displayed with theme
4. Computer chooses a random word from the array of wordChoices
5. Player [LOOP]
	- Listen for current player's alphabet key
	- Check chosen alphabet to see if it's in the var answer
		- If letter is in var answer, store into var chosenLetters
			- chosenLetters shows up on main screen answer's box 
			- when chosenLetters match var answer, then alert winner.
		- If letter is not in var answer or same letter is used twice, store into var wrongLetters
			- wrongLetters will show up on main screen wrong answer's box
			- Hangman image in order of [Head, body, arm, arm, leg, leg, crown] display with each wrong letter
			- Each image will equal to 1
	- Check to see if wrongLetters array is all filled with 1
		-  If wrongLetters array is all filled with 1...
			-  complete image of Hangman will appear.
			-  You lose! message is loaded 


Create array of 7 cells
Map 7 cells with 7 images
Assign properties to each cell
If wrong, 
render state
listen next guess
repeat
update and render state


