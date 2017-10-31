

$(".fa-plus-hexagon").hide();

// Event Handler
$(".accordion-icon").click( function() {

	if ( $('.game-rules').css('visibility') === 'hidden' ) {
		 $('.game-rules').slideDown('slow');
		// $('.game-rules').fadeIn(3000);
    	$(".game-rules").css('visibility','visible');
     	$(".game-rules").css('position','relative');
		
		$(".fa-plus-hexagon").hide();
     	$(".fa-minus-hexagon").show();
     	
     	

  	} else {
  		 $(".game-rules").slideUp('slow');
  		$(".game-rules").css('visibility','hidden');
  		// $('.game-rules').fadeOut(3000);
  		//$(this).find($(".fa-plus-hexagon")).show();
  		$(".fa-minus-hexagon").hide();
  		$(".fa-plus-hexagon").show();
  	}
  return false;

}); // button END







// startGameBtn.addEventListener( 'click', () => {
//  $(".game-rules").slideUp('slow');
// }, false );




