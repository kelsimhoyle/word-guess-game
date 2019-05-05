// variables for the game

var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
var gamesWon = 0;
var gamesLost = 0;
var wordList = ["beets", "dwight", "jim", "pam", "sprinkles", "scranton"];

// // splitting the word into seperate letters
function generateWord() {
    var randomWord = wordList[Math.floor(Math.random() * wordList.length)];
    return randomWord.split('');
}

function hideRules() {
    document.getElementById("rules").style.display = "none";
}

var winningDiv = document.getElementById("winning-div");
function displayWinningDiv () {
    winningDiv.style.display = "block";
}

function hideWinningDiv () {
    winningDiv.style.display = "none";
}

var losingDiv = document.getElementById("losing-div");
function displayLosingDiv () {
    losingDiv.style.display = "block";
}

function hideLosingDiv () {
    losingDiv.style.display = "none";
}

function showGame() {
    var show = document.getElementById("game");
    show.style.display = "block";
}

// variables to edit text on html document
var guessesLeftText = document.getElementById("guesses-left-text");
var wrongGuessText = document.getElementById("wrong-guess-text");
var secretLettersText = document.getElementById("secret-word-text");
var gamesWonText = document.getElementById("games-won-text");
var gamesLostText = document.getElementById("games-lost-text");



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
    guessesLeftText.textContent = guessesLeft;
    gamesWonText.textContent = gamesWon;
    gamesLostText.textContent = gamesLost;
    guessesLeftText.textContent = guessesLeft;
    wrongGuessText.textContent = wrongGuess.join(' ').toUpperCase();

    document.onkeyup = function (event) {
        var letterGuess = event.key.toLowerCase();

        // can only guess a letter
        if (alphabet.includes(letterGuess)) {
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
            gamesWon++;
            displayWinningDiv();
        } else if (guessesLeft === 0) {
            gamesLost++;
            displayLosingDiv();
        }
    }

}



