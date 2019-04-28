// variables for the game
//number of guesses left
var guessesLeft = 10;

//incorrect letters guess
var wrongLetter = [];

//games won
var gamesWon = 0;

// an array of words to be randomly chosen to guess
var wordList = ["Beets", "Dwight", "Jim", "Pam", "Sprinkles", "Scranton", "Dunder Mifflin", "That's What She Said", "Goodbye Toby"];

// variable for the random word to be guessed
var secretWord = wordList[Math.floor(Math.random()*wordList.length)];

// splitting the word into seperate letters
var secretLetters = secretWord.split('');

// create blank spots to be filled and guessed
document.onkeyup = function(event) {
var letterGuess = event.key;
console.log(letterGuess);
}