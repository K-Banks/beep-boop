// Business Logic and Global Variables:
var stringArray = ["I'm sorry, Dave. I'm afraid I can't do that.", "Boop!", "Beep!"];
var countArray = [];
var divisibleArray = [];


// Function to populate array with numbers from 0 to user input
function populateArray(userInput) {
  countArray = [];
  for (var i = 0; i <= userInput; i++) {
    countArray.push(i);
  }
}

// Function to replace any numbers divisible by 3 w/ a string from the stringArray
function divisibleReplace() {
  // debugger;
  divisibleArray = countArray.slice();
  for (var i = 0; i < countArray.length; i++) {
    if (countArray[i]%3 === 0 && countArray[i] !== 0) {
      divisibleArray.splice(i, 1, stringArray[0]);
      console.log("found a number divisible by 3");
    }
  }
}



// User Interface Logic and DOM manipulation:
$(document).ready(function() {

  $("form#rangeInputForm").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("input#rangeInput").val());
    populateArray(userInput);
    $("#arrayOutput").text(countArray);
    divisibleReplace();
    $("#divisibleOutput").text(divisibleArray);
  });

});
