// variables for the game
var gameControls = {
    alphabet: 'abcdefghijklmnopqrstuvwxyz'.split(''),
    guessesLeft: 10,
    gamesWon: 0,

}
var wordList = ["beets", "dwight", "jim", "pam", "sprinkles", "scranton"];
// variable for the random word to be guessed
var secretWord = wordList[Math.floor(Math.random() * wordList.length)];
// splitting the word into seperate letters
var secretLetters = secretWord.split('');

// console.log(secretLetters);

// array of user's guesses
var wrongGuess = [];
var correctGuess = [];

// variables to edit text on html document
var guessesLeftText = document.getElementById("guesses-left-text");
var wrongGuessText = document.getElementById("wrong-guess-text");

var secretLettersText = document.getElementById("secret-word-text");

// create blank spots to be filled and guessed
for (var i = 0; i < secretLetters.length; i++) {
    if (letterGuess !== secretLetters) {
        secretLettersText.textContent += "_ ";
    } if (letterGuess === secretLetters) {
        secretLetters.indexOf(letterGuess)
    }
}

// user starts playing the game
document.onkeyup = function (event) {
    var letterGuess = event.key.toLowerCase();
    if (gameControls.alphabet.includes(letterGuess)) {
        if (gameControls.guessesLeft > 0) {
            if (secretLetters.includes(letterGuess)) {
                correctGuess.push(letterGuess)
                console.log("yay");
            } else if (wrongGuess.includes(letterGuess)) {
                alert("You already guessed that!");
            }
            else {
                gameControls.guessesLeft--;
                wrongGuess.push(letterGuess);
            }

            guessesLeftText.textContent = gameControls.guessesLeft;
            wrongGuessText.textContent = wrongGuess.join(' ').toUpperCase();
        }
    } else {
        alert("Press a letter to make a guess!");
    }
}

