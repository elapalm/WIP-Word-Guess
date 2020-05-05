// array for the words to be guessed 0-17

var words = ["PHONEIX", "SAGUARO", "COYOTE", "MONSOON", "DRY HEAT", "GRAND CANYON", "RATTLE SNAKE", "MOUNTAINS", "SEDONA", "MARGARITAS", "SUNSHINE"]


var totalGuesses = 12; // Total guesses possible
var lettersGuesed = []; // holds the guessed letters
var randomWord = []; //Pulls a word frim the array
var remainingGuesses = 0; // Counts the number of remaining guesses
var wins = 0;
var losses= 0;
var gameEnd = false; //When the game ends (is true); game restarts
var wordAnswer; //Answer is shown when guesses = 0;



// for display
var directions = document.getElementById("direections")
var userWins = document.getElementById("wins")
var remainingGuesses = document.getElementById("remaining-guesses")


// game start

function GameStart() {

var randomWord = words[Math.floor(Math.random() * words.length)];
  letters = randomWord.split("");
  
  blanks = letters.length;
  
  for (var i = 0; 1 < blanks; i++) {
    spacesAndWord.push("_");
    {

      document.getElementById("currentword").innerHTML = " " + blankSpaces.join(" ");
// computer randomly displays a word in space
document.textContent(randomWord)                
  
  document.onkeyup = function(event) {
var letters = event.key;
  }
}
}
};
// player guesses a letter. if guess is right the computer will replace the correct space with the word. 
// if the guess is wrong the guessed letter will go into the "wrong bin" and player loses a guess
// if the player uses all guesses and does not guess the word the game is over and the correct word is displayed
// if the player guesses the correct word an image supporting the word appears and a sound will play.
// game restarts after sound ends and a new word is displayed
