/*

QUESTION 1:

Create a function that accepts one argument, the number of times to console.log 'hello world'

e.g.

INPUT: repeatHelloWorld(2)
OUTPUT: 
hello world
hello world

*/

function repeatHelloWorld(numberOfTimesToRepeat) {
 
    for (i=0; i < numberOfTimesToRepeat; i++) {
      console.log('hello world')
    }
  }
  
  console.log('QUESTION 1:')
  repeatHelloWorld(4)
  console.log('---------------------------')
  
  // var exampleFunctionEvaluation = repeatHelloWorld(12);
  
  
  // console.log('here', exampleFunctionEvaluation);
  /*
  
  QUESTION 2:
  
  Create a function that accepts one argument, an integer and console.logs from 0 up to the argument
  
  e.g.
  
  INPUT: printIncrement(3)
  OUTPUT: 
  0
  1
  2
  3
  */
  
  
  function printIncrement(number) {
    for (i=0; i <= number; i++) {
      console.log(i)
    }  
  }
  
  console.log('QUESTION 2:')
  printIncrement(9)
  console.log('---------------------------')
  
  // printIncrement(1);
  
  /* 
  QUESTION 3:
  
  - Repeat A String
  
  Create a function "repeat" that accepts two arguments, the string to repeat and the a number that represtents how many times to repeat the string argument.  Return a string that concatenates all the times the string is repeated.
  
  **Examples**
  
  - INPUT: `repeat("yo",4);`
  - OUTPUT: `'yoyoyoyo'`
  
  - INPUT: `repeat("yo",0);`
  - OUTPUT: `''`
  
  - INPUT: `repeat("bye",6);`
  - OUTPUT: `'byebyebyebyebyebye'`
  
  Write Code Below
  */
  
  function repeat(str, num) {
    var val = str
    for (i=0; i < num-1; i++) {
      str += val
    }
    return str
  }
  
  console.log('QUESTION 3:')
  var answer3a = repeat('yo', 10);
  var answer3b = repeat('lit', 8);
  console.log('answer 3a:', answer3a)
  console.log('answer 3b:', answer3b)
  console.log('---------------------------')
  
  /* 
  QUESTION 4:
   - Vowel Count
  
  - Description:
  
  Create the function "vowelCount(str)" that takes a str parameter and returns the number of vowels 
  the string contains (ie. "COMPUTER PROGRAMMER" would return 6).  
  
  **Do not count 'y' as a vowel for this challenge.**
  
  **Example**
  
  - INPUT: `vowelCount("Good Job");`
  - Return Value: `3`
  
  *** Write the vowelCount Function below *** */
  
  function vowelCount(str) {
    str = str.toLowerCase()
    var vwlCnt = 0;
    for (const i of str) {
      if (i === 'a' || i === 'e' || i === 'o' || i === 'u' || i === 'i') {
        vwlCnt += 1;
      }
    }
    return vwlCnt
  }
  
  console.log('QUESTION 4:')
  var vwls1 = vowelCount('Everyone is doing a great job!')
  var vwls2 = vowelCount('EVERYONE IS DOING A GREAT JOB')
  console.log('answer 4a:', vwls1)
  console.log('answer 4b:', vwls2)
  console.log('---------------------------')
  
  /* 
  QUESTION 5: 
  Reverse a String
  
  - Description
  
  Create the function "reverseString" that reverses a string and returns the value of the reversed string. NOTE: Do NOT use the .reverse() method.
  
  INPUT: reverseString("hello");
  OUTPUT: "olleh";
  
  *** Write the reverseString Function below ***
  
  */
  
  function reverseString(str) {
    var backWordsString = '';
    var counter = str.length - 1;
    for (i = 0; i < str.length; i++) {
      backWordsString += str[counter];
      counter -= 1;
    }
    return backWordsString
  }
  
  console.log('QUESTION 5:')
  var rvrs1 = reverseString('goodbye world')
  var rvrs2 = reverseString('What time is it?')
  console.log('answer 5a:', rvrs1)
  console.log('answer 5b:', rvrs2)
  console.log('---------------------------')
  
  // reverseString('hello'); => "olleh"
  
  /*
  QUESTION 6:
  
  Sum Of Digits- Exercise Link
  
  Create the function sumOfDigits that adds individual digits of a number and return the sum.
  
  
  **Example:**
  
  - INPUT: `sumOfDigits(414);`
  4+1+4
  - Return Value: `9`
  
  - INPUT: `sumOfDigits(2913);`
  - Return Value: `15`
  
  
  TIP:
  
  You may need to use the following methods or operators in your solution, reference the workshop page for additional information.
  
  flooring a number will round down
  Math.floor(5.84) ==> 5
  
  modulo is an operator that will give you the remainder from division
  414 % 10 ==> 4
  since 5 divided by 2 equals 
  
  */
  
  function sumOfDigits(num){
    var sum = 0
    var num = num.toString()
    var choppedArray = num.split('')
    for (var i of choppedArray) {
      i = Number(i)
      sum += i
    }
    return sum
  }
  
  
  console.log('QUESTION 6:')
  var sm1 = sumOfDigits(1392)
  var sm2 = sumOfDigits(4439)
  console.log('answer 6a:', sm1)
  console.log('answer 6b:', sm2)
  console.log('---------------------------')
  
  /*
  QUESTION 7:
  [Factorial] - Exercise Link
  
  Create the function factorial(num) that returns the factorial of the parameter.
  
  Not sure what the factorial is? Check this [link for a refresher!](http://www.rapidtables.com/math/algebra/Factorial.htm)
  
  **Example:**
  
  - INPUT: `factorial(4);`
  - Return Value: `24`
  // 4 * 3 * 2 * 1
  */
  
  // - Easy way to do it without any loops -
  //
  // function factorial(num) {
  //   num = num * (num -1)
  //   return console.log(num)
  // }
  //
  //------------------------------------------
  
  // Loop version
  function factorial(num) {
    var counter = num
    var range = num - 1
    for (i = 0; i < range; i++) {
      num = num * (counter - 1)
      counter -= 1
    }
    return num
  }
  
  console.log('QUESTION 7:')
  var fct1 = factorial(3);
  var fct2 = factorial(4)
  console.log('answer 7a:', fct1)
  console.log('answer 7b:', fct2)
  console.log('---------------------------')
  
  /* 
  QUESTION 8:
  
  Challenge - under_score to camelCase
  
  Write a function to convert a variable name from under_score format to camelCase.
  Make sure you support an unlimited number of underscores in the input!
  */
  
  // Examples:
  
  // underToCamel("first_name"); // should return firstName
  // underToCamel("income_tax"); // should return incomeTax
  
  // Write Code Below
  
  function underToCamel(str) {
    // First we get rid of underscores and make an array of words
    var newArray = str.split('_')
    var camelString = ''
    // Next, we capitalize the first letter of every word in the array and add capitilzed words to our new string
    for (const i of newArray) {
      var upperCaseLetter = i.charAt(0).toUpperCase()
      var choppedStr = i.slice(1)
      var finalStr = upperCaseLetter + choppedStr
      camelString += finalStr
    }
    // Now we lowercase the first letter of the string
    lowerCaseLetter = camelString.charAt(0).toLowerCase()
    camelString = camelString.slice(1)
    camelString = lowerCaseLetter + camelString
    return camelString
  }
  
  console.log('QUESTION 8:')
  var cmlstr1 = underToCamel("first_name_hi");
  var cmlstr2 = underToCamel('hello_there_big_world')
  console.log('answer 8a:', cmlstr1)
  console.log('answer 8b:', cmlstr2)
  console.log('---------------------------')
  