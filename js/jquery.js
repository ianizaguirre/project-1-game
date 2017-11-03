

/* ---------------------
--------------------- */
// ON PAGE LOAD 

$(".fa-plus-hexagon").hide();

hidePrimaryGame_ShowLeaders_JQ();

hidePlayerGameTimer_JQ();

hideMainButtonRow_JQ();
/* Hide Permanently Game History Last Move Recap - 
  its only for you to use when debugging */

                                              //$(".not-for-user").hide(); WRONG CLASS

/*---------------------
--------------------- */

// Event Handler
$(".accordion-icon").click( function() {

	if ( $('.game-rules').css('visibility') === 'hidden' ) {

     	openedAccordionJQ();
     	
  	} else {
        closedAccordionJQ();
  	}
  return false;

}); // button END



function closedAccordionJQ() {
      $(".game-rules").slideUp('slow');
      $(".game-rules").css('visibility','hidden');
      // $('.game-rules').fadeOut(3000);
      //$(this).find($(".fa-plus-hexagon")).show();
      $(".fa-minus-hexagon").hide();
      $(".fa-plus-hexagon").show();
}
function openedAccordionJQ() {
       $('.game-rules').slideDown('slow');
    // $('.game-rules').fadeIn(3000);
      $(".game-rules").css('visibility','visible');
      $(".game-rules").css('position','relative');
    
    $(".fa-plus-hexagon").hide();
    $(".fa-minus-hexagon").show();
}


// startGameBtn.addEventListener( 'click', () => {
//  $(".game-rules").slideUp('slow');
// }, false );


/* ------
------ Hide primary-game-container and Show it only when User Clicks Start Game 
------ */

function hidePrimaryGame_ShowLeaders_JQ() {
      $("#list").hide();
      $(".ranking-leaderboard").show();
}

function showPrimaryGame_HideLeaders_JQ() {
    $("#list").show();
     $(".ranking-leaderboard").hide();
}

//showPrimaryGame_HideLeaders_JQ();
//hidePrimaryGame_ShowLeaders_JQ();

/* ------
------ Hide Game Time Wrapper
------ */

function hidePlayerGameTimer_JQ() {
      $(".game-timmer-wrapper").hide();
}

function showPlayerGameTimer_JQ() {
    $(".game-timmer-wrapper").fadeIn(1500);
}

//hidePlayerGameTimer_JQ();
//showPlayerGameTimer_JQ();

/* ------
------  Main 3 Buttons = Add, Remove, End
------ */

function hideMainButtonRow_JQ() {
      $(".three-main-buttons").hide();
}

function showMainButtonRow_JQ() {
   $(".start-game").hide();
    $(".three-main-buttons").fadeIn(1500);
}

//hideMainButtonRow_JQ();
//showMainButtonRow_JQ();


 
/* ------------ */




/* ------------------------
------------- Pretty Alerts , made into functions for better code readability 
------------------------- */

// Function 1
function youLostAlert() {

  $.confirm({
      title: 'Game Over!',
      content: 'You picked the Gavel !',
      type: 'red',
      typeAnimated: true,
          boxWidth: '30%',
        useBootstrap: false,
      buttons: {
          tryAgain: {
              text: 'Try again',
              btnClass: 'btn-red',
              action: function(){
                  location.reload(false);
              }
          },

      }
  });

} // End of youLostAlert Funtion



// Function 2
function youRanOutOfTimeAlert() {

  $.confirm({
      title: 'Game Over!',
      content: 'You Ran Out Of Time !',
      type: 'dark',
      typeAnimated: true,
          boxWidth: '30%',
        useBootstrap: false,
    animation: 'news',
    closeAnimation: 'news',
      
      buttons: {
          tryAgain: {
              text: 'Try again',
              btnClass: 'btn-red',
              action: function(){
                  location.reload(false);
              }
          },

      }
  });

} // End of youRanOutOfTimeAlert Funtion


// Function 3
function youMustRemoveaGem() {

  $.confirm({
      title: 'Hurry!',
      content: 'You Cant End Your Turn Yet... Remove a gem first!',
      type: 'red',
      typeAnimated: true,
          boxWidth: '30%',
        useBootstrap: false,
    animation: 'news',
    closeAnimation: 'news',
    closeIcon: true,
      
      buttons: {
          tryAgain: {
              text: 'Back To Game',
              btnClass: 'btn-red',
              action: function(){
                  
              }
          },

      }
  });

} // End of youRanOutOfTimeAlert Funtion

// Function 4
function youWonTheGame() {

  $.confirm({
      title: 'You Won!',
      content: 'Congratulations !',
      type: 'green',
      typeAnimated: true,
          boxWidth: '30%',
        useBootstrap: false,
    animation: 'news',
    closeAnimation: 'news',
      
      buttons: {
          tryAgain: {
              text: 'THANK YOU',
              btnClass: 'btn-green',
              action: function(){
                  location.reload(false);
              }
          },

      }
  });

} // End of youRanOutOfTimeAlert Funtion













