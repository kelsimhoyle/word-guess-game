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
var secretBlanks = [];

for (var i = 0; i < secretWord.length; i++) {
    secretBlanks[i] = ("_");
}
console.log(secretLetters);
console.log(secretWord);
console.log(secretBlanks);

// array of user's guesses
var wrongGuess = [];
var correctGuess = [];

// variables to edit text on html document
var guessesLeftText = document.getElementById("guesses-left-text");
var wrongGuessText = document.getElementById("wrong-guess-text");

var secretLettersText = document.getElementById("secret-word-text");

secretLettersText.textContent = secretBlanks.join(" ");
guessesLeftText.textContent = gameControls.guessesLeft;


// user starts playing the game
document.onkeyup = function (event) {
    var letterGuess = event.key.toLowerCase();
    // can only guess a letter
    if (gameControls.alphabet.includes(letterGuess)) {
        if (gameControls.guessesLeft > 0) {
             // user choses correct letter (index > -1)
            if (secretLetters.indexOf(letterGuess) > -1) {
                correctGuess.push(letterGuess);
                for (var i = 0; i < secretLetters.length; i++) {
                if(secretLetters[i] === letterGuess) {
                    secretBlanks[i] = letterGuess;
                }
            }
            } else if (wrongGuess.indexOf(letterGuess) > -1 || correctGuess.indexOf(letterGuess) > -1)  {
                alert("You already guessed that!");
            }
            else {
                gameControls.guessesLeft--;
                wrongGuess.push(letterGuess);
            }
            secretLettersText.textContent = secretBlanks.join(' ');
            guessesLeftText.textContent = gameControls.guessesLeft;
            wrongGuessText.textContent = wrongGuess.join(' ').toUpperCase();
        }
    } else {
        alert("Press a letter to make a guess!");
    }
}

