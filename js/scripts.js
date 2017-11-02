

// Assignments --- Wide Reaching 
const list = document.getElementById('list');

// Assignments --- Type: Counter
// Player Live Selection Counter 
// Tracks and Displays Number of Gem Player has Selected on Screen
let playerLiveSelection = document.getElementById('player-live-selection');
	let count = 0;


// Assignments --- Type: Counter
// ONLY FOR CONSOLE LOG Purpose and checking if you lost
// Tracks Minimum List Length needed for Program to Run Correctly -Starting at: 14 items 

let currentListLength = document.querySelectorAll('.game-list li').length;

// Assignments --- Button -- Group 1
const addGemBtn = document.querySelector('button.add-gem');
const rmvGemBtn = document.querySelector('button.remove-gem');



// ------ Assignments ------ ------  ------ Group 2

// Assignments --- Button -- Group 2
const startGameBtn = document.querySelector('button.start-game');
const endTurnBtn = document.querySelector('button.end-turn');

// ------ Assignments --- Group 2

// Loader Animation Control
let loader = document.getElementById('loader'); // Loader Bars Animation circle outline
let circleWrapper = document.querySelector('.circle-wrapper'); // Circle inside loader bars

// AI "Just Removed" Recap
let aiJustRemovedRecap = document.getElementById('ai-just-removed-recap');
	let aiJustRemovedCount = 0;

// Human "Your" Turn Number Recap
let humanTurnPlace = document.getElementById('human-current-turn-place');
	let humanTurnCount = 0;



// --------- Start Game Count Down Function

function countdownVisual() {
	let liveTextArea = document.querySelector('.live-text-area');

	let countDown = 4;

	//Update the count down every 1 second

	var x = setInterval( function() {

		countDown--;

		if (countDown <= 0) {
			clearInterval(x);
			countDown = 'START';
		}
		if ( countDown === 'START' ) {

			liveTextArea.style.display = 'none';
				closedAccordionJQ();
		}

		liveTextArea.textContent = countDown;

	}, 1000); // End Interval


}

let secondsUpperLimit = 700;
function resetTurnTimer() {
	 secondsUpperLimit = 700;
	return secondsUpperLimit;
}
// --------- Player Turn Count Down Function
function turnTimer() {
	const turnCountdown = document.querySelector('.digit');

	var x = setInterval( function() { // Interval Start
			secondsUpperLimit--;

			if ( secondsUpperLimit <= 0) {
				clearInterval(x);
			}

			turnCountdown.textContent = secondsUpperLimit;
			
			ifGameLost(); // Check if Player Ran Out of time and Lost
	}, 1000); // End Interval

} // End Function

/* -------------------------
---------------------------*/	

// ----- Start Game Block Function that is called inside Start Game Event Listener

function startGameBlock() {

	thenHideLoader();

	// AI "Just Removed" Recap
	aiJustRemovedCount++;
	aiJustRemovedRecap.textContent = aiJustRemovedCount;

	/* updateHumanTurnPlace(); // Feature Not being used right now */

	// Current Game Status - This Acts Like A "Switch"
	let readyToPlayNewGame = "Yes Start New Game";

	if ( readyToPlayNewGame === "Yes Start New Game" ) {

		console.log( "Ready To Play New Game" + "? " + readyToPlayNewGame );

		// Button Guts
		let ol = document.getElementsByTagName('ol')[0];
		let li = document.querySelector('li:last-child');
		ol.removeChild(li);

		// Current List Length
		currentListLength--;
		console.log( "startGameBtn " + "List Length " + currentListLength );
		console.log( "startGameBtn " + "Count " + count );

		// Current Game Status - This Acts Like A "Switch"
		readyToPlayNewGame = "No - Currently Playing A Game";

		// Disable Buttons Cascade
		startGameBtn.disabled = true;
		addGemBtn.disabled = true;
		endTurnBtn.disabled = true;
	} 	
	else {
		console.log( "Ready To Play New Game" + "? " + readyToPlayNewGame );
	}

} // END Function


/* -------------------------
---------------------------*/			




// -------------------------------------- ACTION BELOW ------------

// Clicking the START GAME Button will 
// --ONLY-- launch The AI Programs --FIRST MOVE-- 
// That is pre-set in its Alogrithm


/* ------ ------
	BUTTON Action 
	=> Start Game 
	------ ------ */
	startGameBtn.addEventListener( 'click', () => {

		countdownVisual();



		var x = setTimeout( function() {     // TimeOut is tied to  interval in countdown function
			showPrimaryGame_HideLeaders_JQ();
			showLoader();
			showMainButtonRow_JQ();
			showPlayerGameTimer_JQ();
			turnTimer();


				let x = setTimeout( function() { 
					startGameBlock();
					imitateThinking( startGameBlock );
				}, 500);

			

		}, 4000); // End Interval
	}, false );


/* ------ ------
	BUTTON Action 
	=> Add Gem
	------ ------ */
	addGemBtn.addEventListener( 'click', () => {
          							
		if ( count === -1 || count === -2 || count === -3 ) {

			// If we "Add A Gem" then allow to "Remove A Gem"
			rmvGemBtn.disabled = false;
 
				// Button Guts
				let ol = document.getElementsByTagName('ol')[0];
				let li = document.createElement('li');
				li.innerHTML = '<span><i class="fa fa-gem"></i></span>';
				ol.appendChild(li);

					// Current List Length
					currentListLength++;
	      				console.log( "addGemBtn " + "List Length " + currentListLength );

					// Player Live Selection Counter
					count++;
						playerLiveSelection.textContent = count;
						console.log( "addGemBtn " + "Count " + count );
		} 	else {		
			addGemBtn.disabled = true;
				console.log( "addGemBtn " + "List Length " + currentListLength );
				console.log( "addGemBtn " + "Count " + count );
		}

			if ( count === 0 ) {
				addGemBtn.disabled = true;
				endTurnBtn.disabled = true;
			}

	}, false );


/* ------ ------
	BUTTON Action 
	=> Remove Gem
	------ ------ */
	rmvGemBtn.addEventListener( 'click', () => {
						
		// Player Live Selection Counter
		count--;
				
			if ( count === -1 || count === -2 || count === -3 ) {

				// If we "Remove A Gem" then allow to "Add A Gem"
				addGemBtn.disabled = false;
				// If we "Remove A Gem" then allow player to "End Turn"
				endTurnBtn.disabled = false;

					// Button Guts
					let ol = document.getElementsByTagName('ol')[0];
					let li = document.querySelector('li:last-child');
					ol.removeChild(li);

						// Current List Length
						currentListLength--;
							console.log( "rmvGemBtn " + "List Length " + currentListLength );			
			} 	else {
				rmvGemBtn.disabled = true;
					
				// Negate the "Count--" that auto occurs on any "rmvGemBtn" click
				count++;					
			}
			if ( count === -3 ) {
				rmvGemBtn.disabled = true;
			}
					
			// Player Live Selection Counter
			playerLiveSelection.textContent = count;
				console.log( "rmvGemBtn " + "Count " + count );

	}, false );


// -------------------------- AI PROGRAM --------------------------



// Clicking the END TURN Button will 
// launch The AI Programs --NEXT MOVE-- 
// That is pre-set in its Alogrithm
// For the Rest of its Turns


/* ------ ------
	BUTTON Action 
	=> End Player Turn
		=> and Activate Computer Opponents Turn
	------ ------ */
	endTurnBtn.addEventListener( 'click', () => {

														
		resetTurnTimer();
		const aiCounter = 4 - (- count);

	function endTurnBlock() {



		for ( let i = 1; i <= aiCounter; i++ ) {

			// Button Guts
			let ol = document.getElementsByTagName('ol')[0];
			let li = document.querySelector('li:last-child');
			ol.removeChild(li);
			
			// Current List Length
			currentListLength--;
					console.log( "endTurnBtn " + "List Length " + currentListLength );
					console.log( "endTurnBtn " + "Count " + "In Loop " + count );
		}

		// AI "Just Removed" Recap
		aiJustRemovedCount = aiCounter;
		aiJustRemovedRecap.textContent = aiJustRemovedCount;

		// updateHumanTurnPlace();

	} //  END of Function

			if ( aiCounter === 1 || aiCounter === 2 || aiCounter === 3 ) {
				
				// If we "End Turn" then allow to "Remove A Gem"
				rmvGemBtn.disabled = false;
				// Disable "Add A Gem" since we reset Count to Zero
				addGemBtn.disabled = true;
	
					


					imitateThinking( endTurnBlock );

						endTurnBtn.disabled = true;

			} 	else {
				endTurnBtn.disabled = true;
			}
					
			// Reset Player Counter To Zero 
				count = 0;	
					playerLiveSelection.textContent = 0;
						console.log( "endTurnBtn " + "List Length " + "Last To Remove Was " + currentListLength );
						console.log( "endTurnBtn " + "Count " + "Exit Loop " + count );

	}, false );

/* ------ ------
	BUTTON Action 
	=> End Player Turn
		=> Added Rules for Game Log
	------ ------ */
	endTurnBtn.addEventListener( 'click', () => {

		showLoader();

		imitateThinking( thenHideLoader );

		ifGameLost();

	}, false );





// ---------------Global------------ FUNCTIONS ----------------

	
function imitateThinking(onSomething) {
	const timeoutID = window.setTimeout(onSomething, 1200);
}


function showLoader() {
	aiJustRemovedRecap.textContent = "...";
	// Loader Animation Control
	loader.style.display = 'block';
	circleWrapper.style.display = 'block';
}

function thenHideLoader() {
	// Loader Animation Control

	var x = setTimeout( function() {

	loader.style.display = 'none';
	circleWrapper.style.display = 'none';

}, 800);

}

/* Not being used right now
function updateHumanTurnPlace() {
	// Human "Your" Turn Number Recap
	humanTurnCount++;
	humanTurnPlace.textContent = humanTurnCount;
}
*/


function ifGameLost() {
	if ( currentListLength === 0 ) {
		 currentListLength = -1;
		return window.alert("Bro ... YOU LOST");
	}
	if ( secondsUpperLimit === 0 ) { // Checks if Player has run out of time
		
		var x = setTimeout( function() {
		return	window.alert("Bro ... YOU Ran Out Of Time");
		}, 1000); // End Delay
	}
}







function activateMouseEffects() {

/* --- On Click Event For Mouse Explosion */


let clickEffectsContainer = document.querySelector('.allow-click-effects-container');

clickEffectsContainer.onclick = function() {
	
	//console.log(event);

	// Explosion Guts
	const parent = clickEffectsContainer;
	let makeChild = document.createElement('span');
	makeChild.classList.add('explosion_boom');
		console.log(makeChild);
		makeChild.style.position = 'absolute';
		makeChild.style.top = event.pageY + 80 + 'px';
		makeChild.style.left = event.pageX + 'px'; 
	const result = parent.appendChild(makeChild);



		// Bomb Hole Guts
		const bombs = document.querySelectorAll('.explosion_boom');
		const parent2 = bombs[bombs.length - 1];
		let makeChild2 = document.createElement('span');
		makeChild2.classList.add('explosion');
		parent2.style.top = (parent2.offsetTop - 90) + 'px'; 
		 
var x = setTimeout( function() { 
		parent2.appendChild(makeChild2);
}, 120);

	
};

clickEffectsContainer.onmousedown = function() {
	// Once Mouse Click is kept Pressed
	//Adds click down effect to the static emoji div
	const emojiContainer = document.querySelector('.emoji--bomb');
		emojiContainer.classList.add('touched');
		//var x = setTimeout( function() { emojiContainer.classList.remove('touched'); }, 120);
};
clickEffectsContainer.onmouseup = function() {
	// Once Mouse Click is released
	//Removes click down effect to the static emoji div
	const emojiContainer = document.querySelector('.emoji--bomb');
		emojiContainer.classList.remove('touched');
};

}


