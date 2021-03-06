// Business Logic and Global Variables:
var stringArray = ["I'm sorry, Dave. I'm afraid I can't do that.", "Boop!", "Beep!"];
var countArray = [];
var divisibleArray = [];
var oneArray = [];
var zeroArray = [];
var stringArrayCounter = 0;
var arrayLength = 0;
var userName = "Dave";
var userNameDefault = "Dave";


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
      divisibleArray.splice(i, 1, stringArray[stringArrayCounter]);
    }
  }
}

// Function to replace any numbers containing digit "1" w/ a string from stringArray
function oneReplace() {
  oneArray = divisibleArray.slice();
  for (var i = 0; i < oneArray.length; i++) {
    // this sub-loop will check if a number contains the digit "1"
    var oneCounter = 0;
    var stringForCounter = "'" + oneArray[i] + "'";
    for (var j = 0; j < stringForCounter.length; j++) {
      if (parseInt(stringForCounter[j]) === 1) {
        oneCounter ++;
      }
    }
    if (oneCounter > 0) {
      oneArray.splice(i, 1, stringArray[stringArrayCounter]);
    }
  }
}

// Function to replace any numbers containing digit "0" w/ a string from stringArray
function zeroReplace() {
  zeroArray = oneArray.slice();
  for (var i = 0; i < oneArray.length; i++) {
    // this sub-loop will check if a number contains the digit "0"
    var zeroCounter = 0;
    var stringForCounter = "'" + oneArray[i] + "'";
    for (var j = 0; j < stringForCounter.length; j++) {
      if (parseInt(stringForCounter[j]) === 0) {
        zeroCounter ++;
      }
    }
    if (zeroCounter > 0) {
      zeroArray.splice(i, 1, stringArray[stringArrayCounter]);
    }
  }
}

// This will separate array values and output each value as a list item from smallest to largest
function listPrint(arrayName, printSpanName) {
  for (var i = 0; i < arrayLength; i++) {
    var listAdd = arrayName.pop();
    $(printSpanName).prepend("<li>" + listAdd + "</li>");
  }
}

// This will separate array values and output each value as a list item from largest to smallest
function reverseListPrint(arrayName, printSpanName) {
  for (var i = 0; i < arrayLength; i++) {
    var listAdd = arrayName.pop();
    $(printSpanName).append("<li>" + listAdd + "</li>");
  }
}

// This will change any instance of the word "Dave" with a user submitted name
function nameChange(name1, name2) {
  if (name1 === "") {
    name1 = "Dave";
  }
  debugger;
  stringArray[stringArrayCounter] = stringArray[stringArrayCounter].replace(name2, name1);
  $("span#userNameSpan").text(name1);
  $("span#userNameButton").text(name1);
  userNameDefault = name1;
}

// This will limit the acceptable inputs to prevent excessive load on the system
function numberCheck(number) {
  if (number < 0 || number === undefined) {
    alert("Error: enter a positive number");
  } else if (number >= 1500) {
    alert("Error: system overload. enter a number < 1,500");
  }
}


// User Interface Logic and DOM manipulation:
$(document).ready(function() {
  $("span#userNameSpan").text(userNameDefault);
  $("span#userNameButton").text(userNameDefault);
  $("form#rangeInputForm").submit(function(event) {
    event.preventDefault();
    stringArrayCounter = 0;
    userName = $("input#nameInput").val();
    nameChange(userName, userNameDefault);
    // next line will remove any list items added from previous execution
    $("li").detach();
    var userInput = parseInt($("input#rangeInput").val());
    numberCheck(userInput);
    if (userInput >= 0 && userInput <= 1500) {
      var reverseTracker = 0;
      // next line uses .is() method to confirm if checkbox is checked or not
      if ($("#reverse").is(":checked")) {
        reverseTracker = 1;
      }
      populateArray(userInput);
      arrayLength = countArray.length;
      // had to use a while loop to compare variables. Unnecessary but allows for later scaling.
      while (stringArrayCounter < stringArray.length) {
        if (stringArrayCounter === 0) {
          divisibleReplace();
        } else if (stringArrayCounter === 1) {
          oneReplace();
        } else {
          zeroReplace();
        }
        stringArrayCounter += 1;
      }
      if (reverseTracker === 1) {
        reverseListPrint(countArray, "#arrayOutput");
        reverseListPrint(divisibleArray, "#divisibleOutput");
        reverseListPrint(oneArray, "#oneOutput");
        reverseListPrint(zeroArray, ".zeroOutput");
      } else {
        listPrint(countArray, "#arrayOutput");
        listPrint(divisibleArray, "#divisibleOutput");
        listPrint(oneArray, "#oneOutput");
        listPrint(zeroArray, ".zeroOutput");
      }
      $(".vegeta").hide();
      $(".boop").hide();
      $(".HAL").slideDown("slow");
      $(".hello").slideDown("fast");
      $(".sorry").slideUp("fast");
    } else if (userInput > 9000) {
      $(".vegeta").show();
    } else {
      $(".boop").show();
    }
  });
  $("button.nameUpdate").click(function() {
    $("li").detach();
    userName = "unkownUser";
    $(".sorry").slideToggle("fast");
    $(".hello").toggle();
    nameChange(userName, userNameDefault);
    event.preventDefault();
  });
});
