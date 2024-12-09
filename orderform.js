/*Jquery Form Validation 12-1-2024*/
$(document).ready(function() {
    //Regex for email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
    //Helper function to clear error message
    function clearErrorMessage(id) {
      $('#' + id).text('');
    }
  
    //Helper function to show error message
    function showErrorMessage(id, message) {
      $('#' + id).text(message);
    }
  
    //Name validation
    $("#name").blur(function() {
      const name = $(this).val().trim();
      if (name === '') {
        showErrorMessage("nameErr", "Name is required");
      } else {
        clearErrorMessage("nameErr");
      }
    });

    //Address validation
    $("#address").blur(function() {
        const address = $(this).val().trim();
        if (address === '') {
          showErrorMessage("addressErr", "Address is required");
        } else {
          clearErrorMessage("addressErr");
        }
      });

      //City validation
    $("#city").blur(function() {
        const city = $(this).val().trim();
        if (city === '') {
          showErrorMessage("cityErr", "City is required");
        } else {
          clearErrorMessage("cityErr");
        }
      });

      //Zip validation
    $("#zip").blur(function() {
        const zip = $(this).val().trim();
        if (zip === '') {
          showErrorMessage("zipErr", "Zip code is required");
        } else if (!/^\d{5}$/.test(zip)) {
          showErrorMessage("zipErr", "Zip code must be 5 digits");
        } else {
          clearErrorMessage("zipErr");
        }
      });
  
    //Email validation
    $("#email").blur(function() {
      const email = $(this).val().trim();
      if (email === '') {
        showErrorMessage("emailErr", "Email is required");
      } else if (!emailRegex.test(email)) {
        showErrorMessage("emailErr", "Please enter a valid email address");
      } else {
        clearErrorMessage("emailErr");
      }
    });
    
    //Email confirmation
    $("#email2").blur(function() {
      const email = $(this).val().trim();
      if (email === '') {
        showErrorMessage("email2Err", "Email is required");
      } else if (!emailRegex.test(email)) {
        showErrorMessage("email2Err", "Please enter a valid email address");
      } else {
        clearErrorMessage("email2Err");
      }
    });
  
    //Shipping Address validation
    $("#shipaddr").blur(function() {
      const shippingAddress = $(this).val().trim();
      if (shippingAddress === '') {
        showErrorMessage("shipaddrErr", "Shipping address is required");
      } else {
        clearErrorMessage("shipaddrErr");
      }
    });
  
    //Shipping City validation
    $("#shipcity").blur(function() {
      const shippingCity = $(this).val().trim();
      if (shippingCity === '') {
        showErrorMessage("shipcityErr", "Shipping city is required");
      } else {
        clearErrorMessage("shipcityErr");
      }
    });
  
    //Shipping Zip code validation
    $("#shipzip").blur(function() {
      const shippingZip = $(this).val().trim();
      if (shippingZip === '') {
        showErrorMessage("shipzipErr", "Shipping zip code is required");
      } else if (!/^\d{5}$/.test(shippingZip)) {
        showErrorMessage("shipzipErr", "Shipping zip code must be 5 digits");
      } else {
        clearErrorMessage("shipzipErr");
      }
    });

    //When the checkbox is clicked
    $("#copy").change(function() {
        if ($(this).is(':checked')) {
        // Copy billing address, city, and zip to shipping fields
        $("#shipaddr").val($("#address").val());
        $("#shipcity").val($("#city").val());
        $("#shipzip").val($("#zip").val());
                
        //Get state from the billing state dropdown
        var billingState = $("#state").val();
                
        //Set shipping state dropdown to match billing state
        $("#shipstate").val(billingState);
                
        //Make sure the state is selected
        $('#state option[value="' + billingState + '"]').prop('selected', true);
        } else {
        //If checkbox is unchecked, clear shipping fields
        $("#shipaddr").val('');
        $("#shipcity").val('');
        $("#shipzip").val('');
        $("#shipstate").val('');
        }
    });

    //Function to calculate order total
    function calculateOrderTotal() {
      let orderTotal = 0;
      
      //Iterate through each quantity input field
      $(".qty").each(function(index) {
        const qty = $(this).val();
        const quantity = $.isNumeric(qty) ? parseInt(qty) : 0;
        
        //Get price for current product
        const price = parseFloat($("#price" + (index + 1)).text().replace('$', ''));
        
        //Calculate total for product
        const total = price * quantity;
        $("#total" + (index + 1)).text("$" + total.toFixed(2));
        
        //Add to order total
        orderTotal += total;
      });
  
      //Set subtotal
      $("#subt").text("$" + orderTotal.toFixed(2));
  
      //Get shipping state
      const shipState = $("#shipstate").val();
      let tax = 0;
      let shipping = 0;
  
      //Calculate tax based on shipping state
      if (shipState === "TX") {
        tax = orderTotal * 0.08;
        $("#tax").text("$" + tax.toFixed(2));
  
        //Shipping cost for TX
        shipping = 5.00;
      } else {
        $("#tax").text("$0.00");
      }
  
      //Set shipping
      $("#ship").text("$" + shipping.toFixed(2));
  
      //Calculate grand total; subtotal + tax + shipping
      const grandTotal = orderTotal + tax + shipping;
      $("#gTotal").text("$" + grandTotal.toFixed(2));
    }
  
    //Trigger calculation when quantity changes
    $(".qty").on("change", function() {
      calculateOrderTotal();
    });
  
    //Calculate totals on page load
    calculateOrderTotal();
  
    //Validate form before submission
    $("#order").on("submit", function(e) {
      let isValid = true;
  
      //Check all quantity fields are numeric
      $(".qty").each(function() {
        const qty = $(this).val();
        if (!$.isNumeric(qty) || parseInt(qty) < 0) {
          isValid = false;
          alert("Please enter a valid quantity.");
          return false; // Break loop
        }
      });

      // Prevent form submission if invalid
      if (!isValid) {
        e.preventDefault();
      }
    });
  });
/*End Program*/