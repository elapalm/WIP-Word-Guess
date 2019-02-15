// array for the words to be guessed 0-17

var words = ["Serenity", "Shiny", "Reavers", "Shiny", "Browncoats", "River", "Simon", "Jayne", "Inara", "Book", "Mal", "Captain", "Miranda", "Kaylee", "Zoe", "Wash", "Alliance"]

// scoring varriables

var spaces = 0;
var letters = []
var randomWord = "";
var wrongGuess = 0;
var spacesAndWord = [];

// for display
var directions = document.getElementById("direections")
var userWins = document.getElementById("wins")
var remainingGuesses = document.getElementById("remaining-guesses")


// game start

document.onkeyup = function(event) {
var letters = event.key;
}
var randomWord = words[Math.floor(Math.random() * words.length)];

// computer randomly displays a word in space
document.textContent(randomWord)

// player guesses a letter. if guess is right the computer will replace the correct space with the word. 
// if the guess is wrong the guessed letter will go into the "wrong bin" and player loses a guess
// if the player uses all guesses and does not guess the word the game is over and the correct word is displayed
// if the player guesses the correct word an image supporting the word appears and a sound will play.
// game restarts after sound ends and a new word is displayed. 