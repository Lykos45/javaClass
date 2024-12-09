/*About Page Functions*/
/*Toggle function*/
$(document).ready(function() {
    $("#assignments").click(function() {
        $("#homeW").toggle();
    })
  });
/*Hover event fadeout & fadein slogan*/
$(document).ready(function() {
    $("#slogan").hover(
      function() {
        $(this).fadeOut(500, function() {
          $(this).text("JavaScript/Jquery").fadeIn(500);
        });
      },//Revert to the original message on mouseout
      function() {
         $(this).fadeOut(500, function() {
           $(this).text("Project Management Software").fadeIn(500);
         });
      }
    );
  });
/*Image animation*/
$(document).ready(function() {
    $("#profile").animate({
      right: "100px",
      opacity: 1
    }, 1000);
  });

/*End Program*/