/*Add to cart*/
$(document).ready(function() {
    // Initialize cart count
    var shoppingCart = 0; 
    
    //Add to cart event
    $(".add").click(function () {
        var itemName = $(this).attr("name");
        var itemID = $(this).attr("id");
        shoppingCart++;
        if (shoppingCart > 0) {
            $("#empty").hide();
        }
        var cartLink = "<li class='cartItem' name='" + itemID + "'>" + itemName + " <span class='del'>Remove</span></li>";
        $("#cart").append(cartLink);
        $("#" + itemID).hide();
    });
  });

/*Remove from cart*/
$(document).ready(function() {
    // Delegate the click event to the cart container
    $("#cart").on("click", ".del", function(event) {
      // Prevent the default link behavior (e.g., navigating to another page)
      event.preventDefault();
  
      // Get the parent list item (or any other relevant container)
      var cartItem = $(this).closest("li");
  
      // Remove the item from the cart visually
      cartItem.remove();
      // Perform any additional logic, such as updating cart totals or sending an AJAX request to update the server-side cart
    });
  });
//////////////////////////////////////////////////////////////^CODE ABOVE DONE^///////////////////////////////////////////////////////////////////////////////////
  
//Add text back when cart is empty NOT WORKING****
$(document).ready(function() {
    // Check if the cart is empty
    if ($("#cart").is("#empty")) {
      // Add the text back
      $(".add").show();
    }
  });
  
  


/*Star rating*/
//Not working either******
$(document).ready(function() {
    $('.star').hover(
      function() {
        $(this).prevAll('.star').addBack().addClass('hovered');
      },
      function() {
        $(this).prevAll('.star').addBack().removeClass('hovered');
      }
    );
  
    $('.star').click(function() {
      let rating = $(this).data('rating');
      $(this).parent().data('rating', rating);
  
      $(this).prevAll('.star').addBack().addClass('selected');
      $(this).nextAll('.star').removeClass('selected');
    });
  });


/*End Program*/