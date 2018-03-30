// Business Logic and Global Variables:
var stringArray = ["I'm sorry, Dave. I'm afraid I can't do that.", "Boop!", "Beep!"];
var countArray = [];


// Function to populate array with numbers from 0 to user input
function populateArray(userInput) {
  countArray = [];
  for (var i = 0; i <= userInput; i++) {
    countArray.push(i);
    console.log(countArray);
  }
}



// User Interface Logic and DOM manipulation:
$(document).ready(function() {

  $("form#rangeInputForm").submit(function(event) {
    debugger;
    event.preventDefault();
    var userInput = parseInt($("input#rangeInput").val());
    populateArray(userInput);
    $("#arrayOutput").text(countArray);
    // debugger;
  });

});
