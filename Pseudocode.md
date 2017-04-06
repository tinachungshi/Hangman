
# PSEUDOCODE - PROJECT #1 
## Adventure Time Hangman by Tina Chung

Variables:  
1. var answer    
2. var wrongLetters = [];  
3. var chosenLetters    

1 PLAYER VERSION 
--------------

1. Load screen with images (hangman dock, alphabet box, answer box)
2. Create an array of words for computer to choose from
3. Computer chooses words
4. Chosen word is saved into variable and then transformed into _ 
5. Listen for player's click on [start game] and alphabets
[LOOP]
6. Hangman is drawn 6 times if wrong [arm, arm, leg, leg, body, head]
7. Store wrong guesses into wrongLetters array 
8. Store and upate secretWord if correct
9. If secretWord is equal to answerWord, alert winner.
10. If wrongGuesses is filled to 6, then alert winner of loss and show hangman.

