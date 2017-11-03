

/* ---------
	Global Declarations 
--------- */
let countHits = 0;




/* ---------
	Functions
--------- */


/* --------------
---------------- */

function changeMouseCursor_JQ() {
// Change Mouse Cursor
$(document).on('mousemove', function(e){
    $('.emoji-cursor').css({
       left:  e.pageX,
       top:   e.pageY
    });
});
    $("#change-cursor-container").css( "cursor", "pointer" ); 
}

/* --------------
---------------- */
function startHardGameMode() {
	$(".start-game").hide(1000);
	countdownVisual();
	

	var x = setTimeout( function() {     // TimeOut is tied to  interval in countdown function
		changeMouseCursor_JQ();
		activateMouseEffects();
		showPrimaryGame_HideLeaders_JQ();
		showLoader();
		showPlayerGameTimer_JQ();
		turnTimer();
	
				let x = setTimeout( function() { 
					// startGameBlock(); // Commented this out - it makes start game run twice
					imitateThinking( startGameBlock );
				}, 300);

	}, 4000); // End Interval
}

/* --------------
---------------- */

function startTurnCheck() { 

	console.log("Start Program - on li Click " + countHits );

	bombsPerTurn();

	hitThreeLimit();

}


/* --------------
---------------- */
function bombsPerTurn() {
	console.log('bombsPerTurn - Funk Start ' + countHits);

	if ( countHits <= 0 && countHits >= -3 ) {
		console.log('bombsPerTurn - IF ' + countHits);

	} else {
		//countHits = 0;
		console.log('bombsPerTurn - ELSE ' + countHits); // ADD THAT START AI STARTS AND YOU HAVE TO WAIT TILL HIS MOVE TO RESUME
	}
		console.log('bombsPerTurn - Funk End ' + countHits);


}


/* --------------
---------------- */

function bombDiamonds() {
	$("li").click( function(e) { 	

		$(this).remove(); // Remove Gem
		countHits--;      // Log Removal
		startTurnCheck();	// Check if Removal is within allowed limit 
		
		//console.log('bombDiamonds - Funk Start AND End ' + countHits);

			currentListLength--;
			console.log( 'Current List Length: ' + currentListLength );
	});	
}


/* --------------
---------------- */

function hitThreeLimit() {

	if ( countHits === -3 ) {
		console.log('NEGATIVE THREE !!!!!!!!!!!!!!!!!!!!!!!');
		resetTurnTimer();

		aiProgram();
				
				countHits = 0; // Reset Count Hits - allows this if statement to run again
			
	}

}


/* --------------
---------------- */



// -------------------------- AI PROGRAM --------------------------


function aiProgram() {
	console.log('ENTER AI');

	const aiCounter = 4 - (- countHits);


	function endTurnBlock() {

		for ( let i = 1; i <= aiCounter; i++ ) {

			// Button Guts
			let ol = document.getElementsByTagName('ol')[0];
			let li = document.querySelector('li:last-child');
			ol.removeChild(li);
			
			// Current List Length
			currentListLength--;
		}

		// AI "Just Removed" Recap
		aiJustRemovedCount = aiCounter;
		aiJustRemovedRecap.textContent = aiJustRemovedCount;

	} //  END of endTurnBlock()


		/*---------------------------------------------------------------*/
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
					

		showLoader();
		imitateThinking( thenHideLoader );
		ifGameLost();

} // End of Entire aiProgram()


														

/* END OF AI ---------------------------------*/






$(document).keypress(function(e) {
  if(e.which === 13) {
     console.log('RUN RUN RUN22222!!!!!!!!');
     resetTurnTimer();

     aiProgram();
     countHits = 0; // Reset Count Hits - allows this if statement to run again
     console.log('RUN RUN RUN3333333!!!!!!!!');
  }
});





/* --------------
---------------------- Run Program 
-------------- */

$("button.hard-game").click( function() { // BODY HARD GAME WRAPPER START

console.log( currentListLength );

startHardGameMode();
bombDiamonds();





}); // BODY Wrapper END
