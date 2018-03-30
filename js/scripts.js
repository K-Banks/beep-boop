// Business Logic and Global Variables:
var stringArray = ["I'm sorry, Dave. I'm afraid I can't do that.", "Boop!", "Beep!"];
var countArray = [];
var divisibleArray = [];
var oneArray = [];


// Function to populate array with numbers from 0 to user input
function populateArray(userInput) {
  countArray = [];
  for (var i = 0; i <= userInput; i++) {
    countArray.push(i);
  }
}

// Function to replace any numbers divisible by 3 w/ a string from the stringArray
function divisibleReplace() {
  divisibleArray = countArray.slice();
  for (var i = 0; i < divisibleArray.length; i++) {
    if (countArray[i]%3 === 0 && countArray[i] !== 0) {
      divisibleArray.splice(i, 1, stringArray[0]);
    }
  }
}

// Function to replace any numbers containing digit "1" w/ a string from stringArray
function oneReplace() {
  oneArray = divisibleArray.slice();
  for (var i = 0; i < oneArray.length; i++) {
    // this sub-loop will check if a number contains the digit "1"
    // debugger;
    var oneCounter = 0;
    var stringForCounter = "'" + oneArray[i] + "'";
    for (var j = 0; j < stringForCounter.length; j++) {
      if (parseInt(stringForCounter[j]) === 1) {
        oneCounter ++;
      }
    }
    if (oneCounter > 0) {
      oneArray.splice(i, 1, stringArray[1]);
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
    oneReplace();
    $("#oneOutput").text(oneArray);
  });

});
