// ---------------------------------------------------------------------------------------------------------------------
// 	GLOBAL VARIABLES
// ---------------------------------------------------------------------------------------------------------------------

var wins = 0
var losses = 0
var playerScore = 0
var targetScore
var crystalOneValue
var crystalTwoValue
var crystalThreeValue
var crystalFourValue

// ---------------------------------------------------------------------------------------------------------------------
// FUNCTIONS
// ---------------------------------------------------------------------------------------------------------------------

// Returns a random integer between a given min and max value
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Sets a random number between 19 - 120 to the targetNumber
function assignTargetNumber() {
	targetScore = getRandomInt(19, 120);
	return targetScore;
};

// Sets a random number between 1 - 12 to each crystal variable
function assignCrystalNumbers() {
	crystalOneValue = getRandomInt(1, 12);
	crystalTwoValue = getRandomInt(1, 12);
	crystalThreeValue = getRandomInt(1, 12);
	crystalFourValue = getRandomInt(1, 12);
	return null;
};


// Updates the UI with current variable values
function updateUi() {
	$("#goal-score").text(targetScore);
	$("#current-score").text(playerScore);
	$("#wins").text(wins);
	$("#losses").text(losses);
};

// Sets up the UI for the game to initially be played
function initializeUi() {
	playerScore = 0; 
	assignTargetNumber();
	assignCrystalNumbers();
	updateUi();
};

// Checks to see if the win/loss conditions have been met
function checkScore() {
	if(targetScore === playerScore) {
		wins++;
		alert("You Win! Resetting game...");
		initializeUi();
		updateUi();
	}
	else if(targetScore < playerScore) {
		losses++;
		alert("You Lose! Resetting game...");
		initializeUi();
		updateUi();
	}
	else{
		return false;
	}
};

// ---------------------------------------------------------------------------------------------------------------------
// GAME FLOW
// ---------------------------------------------------------------------------------------------------------------------

$(document).ready(function() {


	// Sets up the initial game variables and UI
	initializeUi();

	// Sets click functionality for crystal images, increases user score based on value of crystal variable, refreshes UI, and checks to see if win/loss conditions are met
	$("#crystalOne").on("click", function() {
		playerScore += crystalOneValue;
		updateUi();
		checkScore();
	});

	$("#crystalTwo").on("click", function() {
		playerScore += crystalTwoValue;
		updateUi();
		checkScore();
	});

	$("#crystalThree").on("click", function() {
		playerScore += crystalThreeValue;
		updateUi();
		checkScore();
	});

	$("#crystalFour").on("click", function() {
		playerScore += crystalFourValue;
		updateUi();
		checkScore();
	});

});