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
        currentScore = 0;
        // Set a new Target Score ()
        targetScore = getRandom(19, 120);
        // Set different values for each of the crystals between 1 and 12
        crystal.blue.value = getRandom(1, 12);
        crystal.red.value = getRandom(1, 12);
        crystal.green.value = getRandom(1, 12);
        crystal.yellow.value = getRandom(1, 12);

        // Change the HTML to reflect all of these changes. 
        $("#yourScore").html(currentScore)
        $("#targetScore").html(targetScore)

        // Testing Console
        console.log("-------------------");
        console.log("Target Score: " + targetScore);
        console.log("Blue: " + crystal.blue.value + " | Green " + crystal.green.value + " | Red: " + crystal.red.value + " | Yellow " + crystal.yellow.value);
        console.log("-------------------");

    }
    // Create Function that responds to clicks on crystals
var addValues = function(crystal) {
        currentScore = currentScore + crystal.value;
        // Change HTML to reflect changes in the currentScore Variable
        $("#yourScore").html(currentScore);

        // Call the checkWin function
        checkWin();

        // Testing
        console.log("Your score: " + currentScore);
    }
    /// Check if user won or lost and reset the game
var checkWin = function() {
    // Check if currentScore is larger than the targetScore
    if (currentScore > targetScore) {
        alert("Sorry but you lost!");
        console.log("You lost");
        // Add to loss counter
        lossCount++;
        // Change Loss Count 
        $("#lossCount").html(lossCount);
        // Restart the Game
        startGame();
    } else if (currentScore == targetScore) {
        alert("You won!")
        console.log("You won!");
        // Add to the win counter
        winCount++;
        // Change Loss Count 
        $("#winCount").html(winCount);
        // Restart the Game
        startGame();
    }
}

//Main Process
// =========================================================
// Start Game the first time
startGame();

$("#blue").click(function() {
    addValues(crystal.blue);
})

$("#red").click(function() {
    addValues(crystal.red);
})

$("#green").click(function() {
    addValues(crystal.green);
})

$("#yellow").click(function() {
    addValues(crystal.yellow);
})