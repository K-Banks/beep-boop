# _HAL9000 Malfunctioning Number Counter_

#### _This program will display all numbers between 0 and a user defined number with a few "glitches", 3/30/2018_

#### By _**Kayl Eubanks**_

## Description

_This program will display all numbers ranging between 0 and a number input by the user. Instead of accurately displaying all numbers, there will be instances where a whole number or single digit will be replaced with a string._

### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| **Return an array containing all numbers from 0 to user-defined input** | User input: "5" | Output: "[0,1,2,3,4,5]" |
| **Return an array containing all numbers in reverse numerical order** | Input: "5" | Output: "[5,4,3,2,1,0]" |
| **Check array for any numbers divisible by 3. Replace number with string "I'm sorry, Dave. I'm afraid I can't do that."" ** | Input: "3" | Output: "I'm sorry, Dave. I'm afraid I can't do that." |
| **Check array for any numbers containing the digit "1" and replace number with the string: "Boop!"** | Input: "1" | Output: "Boop!" |
| **Check array for any numbers containing the digit "0" and replace number with the string: "Beep!"** | Input: "0" | Output: "Beep!" |
| **Update string with user name input** | Input: "Joe" | Output: "I'm sorry, Joe. I'm afraid I can't do that." |

## Setup/Installation Requirements

* _Navigate to http://k-banks.github.io/beep-boop in a web browser_
* _Enter the number you wish the program to count to and press the submit button._
* _Alternatively, clone the repository from https://github.com/K-Banks/beep-boop _
* _Open the index.html file in a web browser._

## Known Bugs

_When trying to change the name a second time, the jumbotron is not updated._
* _console error output: "Uncaught TypeError: Cannot read property 'replace' of undefined"_

## Support and contact details

_Please contact the developer, Kayl Eubanks, at kayleubanks@gmail.com for any comments, questions, or to report any bugs._

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap 3.3.7_
* _JavaScript_
* _jQuery 3.3.1_

### License

*This software is licensed under the MIT license.*

Copyright (c) 2018 **_Kayl Eubanks_**
