//Global Variables
// =========================================================


// Crystal Variables
// =========================================================
var crystal = {
    blue: {
        name: "Blue",
        value: 0,
    },
    green: {
        name: "Green",
        value: 0,
    },
    red: {
        name: "Red",
        value: 0,
    },
    yellow: {
        name: "Yellow",
        value: 0,
    }
};

// Scores (Current and Target)

var currentScore = 0;
var targetScore = 0;

// Wins and Losses
var winCount = 0;
var lossCount = 0;


// Functions
// =========================================================

// Helps with getting random numbers
var getRandom = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    // Starts the game and restarts the game
var startGame = function() {
    // Reset the Current Score
    var currentScore = 0;
    // Set a new Target Score ()
    targetScore = getRandom(19, 120);
    // Set different values for each of the crystals between 1 and 12
    crystal.blue.value = getRandom(1, 12);
    crystal.red.value = getRandom(1, 12);
    crystal.green.value = getRandom(1, 12);
    crystal.yellow.value = getRandom(1, 12);

    // Change the HTML to reflect all of these changes. 
    // Testing Console
    console.log("-------------------");
    console.log("Target Score: " + targetScore);
    console.log("Blue: " + crystal.blue.value + " | Red: " + crystal.red.value + " | Green " + crystal.green.value + " | Yellow " + crystal.yellow.value);
    console.log("-------------------");
}

//Main Process
// =========================================================
// Start Game the first time
startGame();

$("#blue").click(function() {
    alert("test!");
})

$("#red").click(function() {
    alert("test!");
})

$("#green").click(function() {
    alert("test!");
})

$("#yellow").click(function() {
    alert("test!");
})