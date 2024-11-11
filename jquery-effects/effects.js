/*Signuplink toggle function*/
$(document).ready(function() {
    $("#signuplink").click(function() {
        $("#newsSignup").toggle();
    })
  });
/*Hover event fadeout & fadein slogan*/
$(document).ready(function() {
    $("#slogan").hover(
      function() {
        $(this).fadeOut(500, function() {
          $(this).text("Hand Picked Just For You").fadeIn(500);
        });
      },//Revert to the original message on mouseout
      function() {
         $(this).fadeOut(500, function() {
           $(this).text("The Power of Flowers").fadeIn(500);
         });
      }
    );
  });
/*Rose animation*/
$(document).ready(function() {
    $("#rose").animate({
      right: "100px",
      opacity: 1
    }, 1000);
  });
/*Submit form*/
$(document).ready(function(){
    $("#newsSignup").submit(function(){
      alert("Thank you for registering");
    });
  });
//fades out after user submits
  $(document).ready(function(){
    $("#newsSignup").submit(function(){
        $('#newsSignup').fadeOut(500);
    });
  });
//Stop default action to submit form
$(document).ready(function() {
    $("#newsSignup").submit(function(event) {
      if (validationFails) {
        event.preventDefault(); // Stop the form from submitting
      }
    });
  });
/*End Program*/