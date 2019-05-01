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

function hideRules() {
    var hidden = document.getElementById("rules");
    hidden.style.display = "none";
}

function showGame() {
    var show = document.getElementById("game");
    show.style.display = "block";
}

// array of user's guesses
var wrongGuess = [];
var correctGuess = [];
var lettersLeft = secretLetters.length;


// variables to edit text on html document
var guessesLeftText = document.getElementById("guesses-left-text");
var wrongGuessText = document.getElementById("wrong-guess-text");
var secretLettersText = document.getElementById("secret-word-text");
var winningText = document.getElementById("winning-text");



function startGame() {
    // user starts playing the game

    secretLettersText.textContent = secretBlanks.join(" ");
    guessesLeftText.textContent = gameControls.guessesLeft;

    document.onkeyup = function (event) {
        var letterGuess = event.key.toLowerCase();

        // can only guess a letter
        if (gameControls.alphabet.includes(letterGuess)) {
            if (gameControls.guessesLeft > 0 && (lettersLeft > 0)) {
                // user choses correct letter (index > -1)
                if (secretLetters.indexOf(letterGuess) > -1) {
                    correctGuess.push(letterGuess);
                    for (var i = 0; i < secretLetters.length; i++) {
                        if (secretLetters[i] === letterGuess) {
                            secretBlanks[i] = letterGuess;
                            lettersLeft--;
                        }
                    }
                } else if ((wrongGuess.indexOf(letterGuess) > -1) || (correctGuess.indexOf(letterGuess) > -1)) {
                    alert("You already guessed that!");
                } else {
                    gameControls.guessesLeft--;
                    wrongGuess.push(letterGuess);
                }
                secretLettersText.textContent = secretBlanks.join(' ');
                guessesLeftText.textContent = gameControls.guessesLeft;
                wrongGuessText.textContent = wrongGuess.join(' ').toUpperCase();
            }
        } 
        else {
            alert("Press a letter to make a guess!");
        } if (lettersLeft === 0 ) {
            winningText.textContent = "You Win!!!";
        } 
    }

}



