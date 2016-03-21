// Create a global variable for the total
var total = 0;

// Create a function you can run when you submit the field    Hint: .submit()   in jQuery
$('#entry').submit(enter);


// In your enter function, remember we can use .append() in jQuery to add things to HTML elements


function enter() {
  
  var entry;
  var money;
  
  event.preventDefault();
  
  entry = $('#newEntry').val();
 
  entry = parseFloat(entry);
  

  money = dollar(entry);
  

  $('#entries').append('<tr><td></td><td>' + entry + '</td></tr>');
  
  // Update the running total
  total = total + entry;
  
  // Print the updated total with proper money formatting
  $('#total').html(dollar(total));
  
  // Clear out the input field, ready for next value
  $('#newEntry').val('');
  
}

// Use this to convert a number to U.S. money format
function dollar(number) {
  

  var money = parseFloat(number);
  

  money = money.toFixed(2);
  
  money = '$' + money;
  

  return money;
  
}


