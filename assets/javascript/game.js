// variables for the game
var gameControls = {
    alphabet: 'abcdefghijklmnopqrstuvwxyz'.split(''),
    gamesWon: 0,
}
var wordList = ["beets", "dwight", "jim", "pam", "sprinkles", "scranton"];
// variable for the random word to be guessed
//    // user starts playing the game



// // splitting the word into seperate letters
function generateWord() {
    var randomWord = wordList[Math.floor(Math.random() * wordList.length)];
    return randomWord.split('');
}

function hideRules() {
    var hidden = document.getElementById("rules");
    hidden.style.display = "none";
}

function showGame() {
    var show = document.getElementById("game");
    show.style.display = "block";
}

// variables to edit text on html document
var guessesLeftText = document.getElementById("guesses-left-text");
var wrongGuessText = document.getElementById("wrong-guess-text");
var secretLettersText = document.getElementById("secret-word-text");
var winningText = document.getElementById("winning-text");



function startGame() {

    // array of user's guesses
    var wrongGuess = [];
    var correctGuess = [];
    var guessesLeft = 10;
    var secretLetters = generateWord();
    var secretBlanks = [];
    var lettersLeft = 0;
    for (var i = 0; i < secretLetters.length; i++) {
        secretBlanks.push("_");
    }

    for (var j = 0; j <secretLetters.length; j++) {
        lettersLeft++
    }
    console.log(secretLetters + lettersLeft);

    secretLettersText.textContent = secretBlanks.join(" ");
    guessesLeftText.textContent = gameControls.guessesLeft;
    lettersLeft = secretLetters.length;
    guessesLeftText.textContent = guessesLeft;
    wrongGuessText.textContent = wrongGuess.join(' ').toUpperCase();

    document.onkeyup = function (event) {
        var letterGuess = event.key.toLowerCase();

        // can only guess a letter
        if (gameControls.alphabet.includes(letterGuess)) {
            if (guessesLeft > 0 && (lettersLeft > 0)) {
                // user choses correct letter (index > -1)
                if ((secretLetters.indexOf(letterGuess) > -1) && (correctGuess.indexOf(letterGuess) === -1)) {
                    correctGuess.push(letterGuess);
                    for (var i = 0; i < secretLetters.length; i++) {
                        if (secretLetters[i] === letterGuess) {
                            secretBlanks[i] = letterGuess;
                            lettersLeft--;
                        }
                    }
                } else if ((correctGuess.indexOf(letterGuess) > -1) || (wrongGuess.indexOf(letterGuess) > -1)) {
                    alert("You already guessed that!");
                } else {
                    guessesLeft--;
                    wrongGuess.push(letterGuess);
                }
                secretLettersText.textContent = secretBlanks.join(' ');
                guessesLeftText.textContent = guessesLeft;
                wrongGuessText.textContent = wrongGuess.join(' ').toUpperCase();
            }
        }
        else {
            alert("Press a letter to make a guess!");
        } if (lettersLeft === 0) {
            winningText.textContent = "You Win!!!";
        }
    }

}



