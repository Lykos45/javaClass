/*Botanic names*/
//Hiding botanic names & pictures when page loads
$(document).ready(function() {
  $(".botanic").hide();
  $(".imgdiv").hide();
});
//Show botanic names when user clicks on flower names
$(document).ready(function() {
  $(".flower").click(function() {
    $(this).children('.botanic').show();
  })
});

/*mouseover and mouseout plant name to show pictures (hide/show) NOT FINISHED*/
//creating image variables
var getElementById = ("coneflower");
var getElementById = ("mum");
var getElementById = ("rose");
//Using hover to show image to user
// show flowers
$('.pic').hover(function(evt) {
  // ID
  var imgId = '#' + $(this).attr('title') + 'Img';

  // x+y
  var x = evt.pageX + 150; 
  var y = evt.pageY;

  $(imgId).css({
      top: y + 'px',
      left: x + 'px',
      position: 'absolute' 
  }).show();
}, function() {
  // hide on mouseout
  var imgId = '#' + $(this).attr('title') + 'Img'; 
  $(imgId).hide(); 
});
/*CODE ABOVE IS NOT DONE COULD NOT FIGURE OUT^^^*/

/*Keypress event*/
$(document).ready(function() {
  $(document).on('keypress', function(e) {
    // Check if the pressed key is a letter
    if (e.which >= 65 && e.which <= 90) { 
      var letter = String.fromCharCode(e.which).toLowerCase();
      // Finds the element with the matching ID when user presses shift key and a letter
      var targetElement = $('#' + letter); 
      // If the element exists, it will scroll to it
      if (targetElement.length) {
        $('html, body').animate({
          scrollTop: targetElement.offset().top
        }, 500);
      }
    }
  });
});
//End program