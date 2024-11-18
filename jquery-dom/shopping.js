/*Add to cart*/
$(document).ready(function() {
    //Initialize cart count
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
    //Click event for removing items
    $("#cart").on("click", ".del", function(event) {
        event.preventDefault();

        //Get parent list item
        var cartItem = $(this).closest("li");
        var itemID = cartItem.attr("name");

        //Remove items from the cart
        cartItem.remove();

        //Showing Add to Cart
        $("#" + itemID).show();

        //Check if cart is empty
        if ($("#cart li").shoppingCart === 0) {
            $("#cart").append("<li id='empty'>Your shopping cart is empty</li>");
        }
        //If cart is empty show empty message
        if (shoppingCart === 0) {
            $('#empty').show();
        }
    });
});

/*Star rating*/
$(document).ready(function() {
    //Star gif click event
    $('.rating img').on('click', function() {
        var $clickedStar = $(this);
        var $rating = $clickedStar.closest('.rating');

        //Changing image source of clicked star to staroff.gif
        $rating.find('img').each(function() {
            $(this).attr('src', 'staroff.gif');
        });

        //Changing image source of clicked star to 'staron.gif'
        $rating.find('img').slice(0, $clickedStar.index() + 1).attr('src', 'staron.gif');
    });
});
/*End of Program*/