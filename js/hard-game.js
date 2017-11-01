$("button.hard-game").click( function() { // BODY WRAPPER START

/* ---------
	Global Declarations 
--------- */
let countHits = 0;




/* ---------
	Functions
--------- */


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
	
	imitateThinking( startGameBlock );

	}, 4000); // End Interval
}

/* --------------
---------------- */

function startTurnCheck() { 

	console.log("Start Program - on li Click " + countHits );

	bombsPerTurn();

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
	});	
}


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
---------------------- Run Program 
-------------- */

startHardGameMode();
bombDiamonds();











}); // BODY Wrapper END