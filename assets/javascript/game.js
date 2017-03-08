
$(document).ready(function() {

//defining all global variables
var crystalOne = 0; var crystalTwo = 0; var crystalThree = 0; var crystalFour = 0;
var randomGoal = 0; var currentScore = 0;
var gameWins = 0; var gameLosses = 0;

//assigning random target 19-120
function assign_goal_points(){
	randomGoal = 19 + Math.floor(Math.random() * 101);
};

// function assign_crystal_points(crystal){
// 	crystal = Math.floor(Math.random() * 12);
// 	console.log(crystalOne);
// };
// TODO: figure out why above function wasn't working

//assign crystal values, console log for 'cheating' and to make sure it is working can be commented out
function assign_crystal_points(){
 	crystalOne = Math.ceil(Math.random() * 12);
 	crystalTwo = Math.ceil(Math.random() * 12);
 	crystalThree = Math.ceil(Math.random() * 12);
 	crystalFour = Math.ceil(Math.random() * 12);
 	console.log(crystalOne);
 	console.log(crystalTwo);
 	console.log(crystalThree);
 	console.log(crystalFour);
};

//start of gamem function, resets global variables, crystal/target values, updates html
function start(){
	currentScore = 0;
	assign_goal_points();
	console.log(randomGoal);
	assign_crystal_points();
	// assign_crystal_points(crystalOne);
	// assign_crystal_points(crystalTwo);
	// assign_crystal_points(crystalThree);
	// assign_crystal_points(crystalFour);
	// console.log(crystalTwo);
	$(".win").html(gameWins);
	$(".loss").html(gameLosses);
	$("#game-goal").html(randomGoal);
	$("#game-current-score").html(currentScore);

};

//running the start of game function
start();

//on-click functions for each of the four crystals, which reset the start function if game is won/lost
$("#crystal-one-button").on("click", function() {
    currentScore += crystalOne;
	$("#game-current-score").html(currentScore);
    if (currentScore === randomGoal) {
    	gameWins++;
		$(".win").html(gameWins);
    	window.alert("Congratulations!  You won the game!");
		start();
    }
    if (currentScore > randomGoal) {
    	gameLosses++;
		$(".loss").html(gameLosses);
    	window.alert("Oh no!  You lost the game!");
		start();
    }
});

$("#crystal-two-button").on("click", function() {
    currentScore += crystalTwo;
	$("#game-current-score").html(currentScore);
    if (currentScore === randomGoal) {
    	gameWins++;
		$(".win").html(gameWins);
    	window.alert("Congratulations!  You won the game!");
		start();
    }
    if (currentScore > randomGoal) {
    	gameLosses++;
		$(".loss").html(gameLosses);
    	window.alert("Oh no!  You lost the game!");
		start();
    }
});

$("#crystal-three-button").on("click", function() {
    currentScore += crystalThree;
	$("#game-current-score").html(currentScore);
    if (currentScore === randomGoal) {
    	gameWins++;
		$(".win").html(gameWins);
    	window.alert("Congratulations!  You won the game!");
		start();
    }
    if (currentScore > randomGoal) {
    	gameLosses++;
		$(".loss").html(gameLosses);
    	window.alert("Oh no!  You lost the game!");
		start();
    }
});

$("#crystal-four-button").on("click", function() {
    currentScore += crystalFour;
	$("#game-current-score").html(currentScore);
    if (currentScore === randomGoal) {
    	gameWins++;
		$(".win").html(gameWins);
    	window.alert("Congratulations!  You won the game!");
		start();
    }
    if (currentScore > randomGoal) {
    	gameLosses++;
		$(".loss").html(gameLosses);
    	window.alert("Oh no!  You lost the game!");
		start();
    }
});


});

