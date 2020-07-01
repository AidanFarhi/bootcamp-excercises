// QUESTION 1: Simple Sum
// Define a function simpleSum that takes two numbers and returns the sum of those numbers.

function simpleSum(num1, num2) {
    var result = num1 + num2;
    return result;
  }
  
  console.log('question 1:', simpleSum(4, 34))
  
  //----------------------------------------------------------------------------------------
  
  
  // QUESTION 2: Default Greet
  // Define a function, defaultGreet, that takes a first and a last name. defaultGreet should return a string greeting for the given names.
  
  function defaultGreet(firstnm, lastnm) {
    var greeting = `Hello there ${firstnm} ${lastnm}!`;
    return greeting;  
  }
  
  console.log('question 2:', defaultGreet('aidan', 'farhi'))
  
  //-----------------------------------------------------------------------------------------
  
  
  
  
  // QUESTION 3: Tax Caclulator
  // Define a function taxCalculator that accepts the price of an item and a state. taxCalculator should return the after-tax cost of the item, assuming NY's tax is 4% and NJ's sales tax is 6.625%.
  
  function taxCalculator(cost, state) {
    var originalCost = cost
    if (state.toUpperCase() == 'NY') {
      var nyCost = originalCost *= 1.04;
      return `Total cost: $${nyCost}`;
    } else {
      var njCost = originalCost *= 1.06625;
      return `Total cost: $${njCost}`;
    }  
  }
  
  console.log('question 3 in New York:\n', taxCalculator(10, 'ny'))
  console.log('question 3 in New Jersey:\n', taxCalculator(10, 'nj'))
  
  //------------------------------------------------------------------------------------------
  
  
  // QUESTION 4: My Mnemonic
  // Write a function myMnemonic that accepts up to four strings. myMnemonic should return a new string.
  
  // Note that the user may not pass in all four strings!
  
  function myMnemonic (str1, str2, str3, str4) {
    if (str2 === undefined) {
      var newStr = str1;
    } else if (str3 === undefined) {
        var newStr = str1 + str2;
    } else if (str4 === undefined) {
        var newStr = str1 + str2 + str3;
    } else {
      var newStr = str1 + str2 + str3 + str4;
    } 
    return newStr;
  }
  
  console.log('question 4 with 1 arg:', myMnemonic('h'))
  console.log('question 4 with 2 args:', myMnemonic('h', 'e'))
  console.log('question 4 with 3 args:', myMnemonic('h', 'e', 'l'))
  console.log('question 4 with 4 args:', myMnemonic('h', 'e', 'l', 'p'))
  
  //---------------------------------------------------------------------------------------
  
  
  // QUESTION 5: Greeting
  // Define a function greeting that accepts an optional string argument called name. greeting should return a personalized string if the name is present.
  
  function fancyGreet(str) {
    if (str === undefined) {
      return 'Hello there!'
    } else {
        return `Hello there ${str}!`
    }
  }
  
  console.log('question 5 with string:', fancyGreet('aidan'))
  console.log('question 5 without string:', fancyGreet())
  