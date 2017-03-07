
$(document).ready(function() {

var crystalOne = 0; var crystalTwo = 0; var crystalThree = 0; var crystalFour = 0;
var randomGoal = 0; var currentScore = 0;
var gameWins = 0; var gameLosses = 0;
// var chosen_word = ""; var chosen_word_array= []; var word_blank_array = [];
// var guess_left =10; var loss = 0; var win = 0; var guess_correct = false;

function assign_goal_points(){
	randomGoal = 19 + Math.floor(Math.random() * 101);
};

// function assign_crystal_points(crystal){
// 	crystal = Math.floor(Math.random() * 12);
// 	console.log(crystalOne);
// };
// TODO: figure out why above function wasn't working

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
	// $(".blank").html(word_blank_array);
	// guess_left =10;
	// $(".guess_left").html(guess_left);
	// $(".letter_guessed").html("");

};
start();

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


























// $(document).ready(function() {

// var words = ["cat", "dog", "bird"];
// var chosen_word = ""; var chosen_word_array= []; var word_blank_array = [];
// var guess_left =10; var loss = 0; var win = 0; var guess_correct = false;

// function choose_word(array){
// 	chosen_word = words[Math.floor(Math.random() * words.length)];
// };

// function generate_word_blank(array){
// 	for (var i = 0 ; i < array.length; i++){
// 		word_blank_array.push("_ ");
// 	}
// };

// function start(){
// 	word_blank_array = [];
// 	choose_word(words);
// 	chosen_word_array = chosen_word.split("");
// 	// console.log(chosen_word_array);
// 	generate_word_blank(chosen_word_array);
// 	// console.log(word_blank_array);
// 	$(".blank").html(word_blank_array);
// 	guess_left =10;
// 	$(".guess_left").html(guess_left);
// 	$(".letter_guessed").html("");

// };
// start();

// function compare_letter(letter){
// 	for (var i =0; i < chosen_word_array.length; i++){
// 		if (letter === chosen_word_array[i]){
// 			word_blank_array[i]=letter;
// 			guess_correct = true;
// 		}
// 	};
// };



// $(document).keyup(function(){
// 	compare_letter(event.key);
// 	$(".letter_guessed").append(event.key + ", ");
// 	$(".blank").html(word_blank_array);
// 	if (guess_correct === false){
// 	guess_left--;
// 	}
// 	guess_correct = false;
// 	$(".guess_left").html(guess_left);
// 	if (word_blank_array.join("") === chosen_word_array.join("")){
// 		win ++;
// 		$(".win").html(win);
// 		start();
// 	};
// 	if (guess_left === 0){
// 		loss++;
// 		$(".loss").html(loss);
// 		start();
// 	};


// });

// });


















// 		var computerChoices = ["one","two","three","four","five","six"];
// 		// TODO: Insert more hangman words.  Maybe even allow a second player to input word?

// 		// TODO: Try using jquery like below?
// 		// var newDiv = $("<div>");
// 		// $(newDiv).html("Would you like to play a game? (press y/n)");
// 		// $("#empty-div").append(newDiv);

// 		document.getElementById("game-text").innerHTML = "Would you like to play a game? (press y/n)";

// 		document.onkeyup = function(event) {
// 			var userPlay = event.key;
// 			if (userPlay === "y"){
// 				var computerWord = computerChoices[Math.floor(Math.random() * computerChoices.length)];
// 				var computerWordDisplay = computerWord;
// 				var userGuessRemaining = 6;
// 				var imageHangman = document.createElement("IMG");
// 				imageHangman.src = "assets/images/6CheerfulPuppy.jpg"
// 				imageHangman.alt = "6 wrong guesses left"
// 				document.getElementById("game-picture").appendChild(imageHangman)
// 				// document.getElementById("game-picture").childNodes[0].setAttribute(class, img-responsive center-block);
// 				document.getElementById("game-guesses").innerHTML = "Letters Guessed:";

// 				for (var i =0; i<computerWord.length; i++)	{
// 					computerWordDisplay = computerWordDisplay.substr(0,i) + "_" + computerWordDisplay.substr(i+1);
// 				}
				

// 				document.getElementById("game-text").innerHTML = "<br>The word is:  " + computerWordDisplay + ".  You have " + userGuessRemaining + " guesses remaining to guess the word.";
// 				// for (var userGuessRemaining = 6; userGuessRemaining > 0; userGuessRemaining--) {
// 				// while (userGuessRemaining > 0) {
// 				// TODO: Figure out why neither of the above (commented) loops worked within keyup function.

// 					document.onkeyup = function(event) {

//         	// Determine which key was pressed
//      	   			var userGuess = event.key;
// 					var userGuessRight = false;
// 					document.getElementById("game-guesses").innerHTML += " " + userGuess;
// 					for (var i = 0; i < computerWord.length; i++)	{
// 						if (userGuess === computerWord[i])	{
// 							computerWordDisplay = computerWordDisplay.substr(0,i) + userGuess + computerWordDisplay.substr(i+1);
// 							userGuessRight = true;	
// 						} 
// 					}
// 					if (userGuessRight === true) {
// 						document.getElementById("game-text").innerHTML = "That is correct!  The word does contain the letter " + userGuess + ".<br>";
// 					}
// 					else {
// 							document.getElementById("game-text").innerHTML = "That is incorrect!  The word does not contain the letter " + userGuess + ".<br>";
// 							userGuessRemaining--;
// 					} 
// 					//below is behavior when guesses run out, showing victory/defeat and reloading page after time delay or button push.
// 					if (userGuessRemaining === 0) {
// 						if (computerWordDisplay === computerWord) {
// 							document.getElementById("game-text").innerHTML = "<br>Congratulations!! You won the game!  Please enjoy the awesome sense of victory and then try a new word!";
// 							function refresh() {
// 								setTimeout(function() {
// 									window.location.reload()
// 								}, 7000);

// 							}
// 							refresh();
// 						} else {
// 							var newImg = document.createElement("IMG");
// 							newImg.src = "assets/images/0PlayDeadPuppy.jpg";
// 							var oldImg = document.getElementById("game-picture");
// 							document.getElementById("game-picture").replaceChild(newImg, oldImg.childNodes[0]);
// 							document.getElementById("game-text").innerHTML = "<br>Sorry, you lost the game.  The word was " + computerWord + ".  Please enjoy the humiliating sense of defeat and then try a new word!";
// 							function refresh() {
// 								setTimeout(function() {
// 									location.reload()
// 								}, 7000);
// 								}
// 							refresh();
// 						}
// 					} else if (userGuessRemaining < 0) {
// 						location.reload();
// 					} else if (computerWordDisplay === computerWord) {
// 							var newImg = document.createElement("IMG");
// 							newImg.src = "assets/images/7WinnerPuppy.jpg";
// 							//uncomment the following couple of lines to try sound:
// 							//audio.play()

// 							var oldImg = document.getElementById("game-picture");
// 							document.getElementById("game-picture").replaceChild(newImg, oldImg.childNodes[0]);
// 							document.getElementById("game-text").innerHTML = "<h1>Congratulations!! You won the game!  Please enjoy the awesome sense of victory and then try a new word!";
// 							// TODO: Ask why timeout refresh function isn't working.
// 							function refresh() {
// 								setTimeout(function() {
// 									window.location.reload()
// 								}, 7000);							
// 							}
// 							refresh();
// 					} else {
// 						if (userGuessRemaining === 5) {
// 							var newImg = document.createElement("IMG");
// 							newImg.src = "assets/images/5HappyPuppy.jpg";
// 							var oldImg = document.getElementById("game-picture");
// 							oldImg.replaceChild(newImg, oldImg.childNodes[0]);
// 						}
// 						if (userGuessRemaining === 4) {
// 							var newImg = document.createElement("IMG");
// 							newImg.src = "assets/images/4BewilderedPuppy.jpg";
// 							var oldImg = document.getElementById("game-picture");
// 							document.getElementById("game-picture").replaceChild(newImg, oldImg.childNodes[0]);
// 						}
// 						if (userGuessRemaining === 3) {
// 							var newImg = document.createElement("IMG");
// 							newImg.src = "assets/images/3MopeyPuppy.jpg";
// 							var oldImg = document.getElementById("game-picture");
// 							document.getElementById("game-picture").replaceChild(newImg, oldImg.childNodes[0]);
// 						}
// 						if (userGuessRemaining === 2) {
// 							var newImg = document.createElement("IMG");
// 							newImg.src = "assets/images/2SulkyPuppy.jpg";
// 							var oldImg = document.getElementById("game-picture");
// 							document.getElementById("game-picture").replaceChild(newImg, oldImg.childNodes[0]);
// 						}
// 						if (userGuessRemaining === 1) {
// 							var newImg = document.createElement("IMG");
// 							newImg.src = "assets/images/1AngryPuppy.jpg";
// 							var oldImg = document.getElementById("game-picture");
// 							document.getElementById("game-picture").replaceChild(newImg, oldImg.childNodes[0]);
// 						}
// 							document.getElementById("game-text").innerHTML += "<br>The word is:  " + computerWordDisplay + ".  You have " + userGuessRemaining + " guesses remaining to guess the word.";
// 							}
// 					} // document.onkeyup endbracket
// 				// } //end bracket of while loop which was removed since it wasn't working







// 		} else {
// 			document.getElementById("game-text").innerHTML = "Please press 'y' if you'd like to play a game."
// 		}
// 		}

		

		

