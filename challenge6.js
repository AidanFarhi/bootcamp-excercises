//Challenge String & Numbers


//#1  Make two variables with strings as values.  Then concat both strings using the + operator.  Print out your results in a console.log()

var str1 = 'hello '
var str2 = 'world'

console.log('#1:')
console.log(str1 + str2)


//#2 Make a variable with a value as a Famous Quote.  Now use the .charAt() method to grab a Specific character and print it out in a console.log().

var famousQuote = '"A man who sits for something, stands for nothing." - Inventor of the standing desk'

console.log('#2:')
console.log(famousQuote.charAt(5))



//#3  Find the length of the given string. Use the .length property.  Use Conditionals with specific messages to understand how long the string is.

var stringLength = "Good afternoon Code Ninjas!  Practice makes perfect!"

function checkLength(str) {
  if (str.length < 5) {
    return `This is a short string. Length: ${str.length}`
  } else if (str.length < 15) {
    return`This is a medium string. Length: ${str.length}`
  } else {
    return `This is a long string! Length: ${str.length}`
  }
}

foundLength = checkLength(stringLength);
console.log('#3:')
console.log(foundLength)


//#4    Use the indexOf() method to find what index the letter w is at in this string. Use Conditionals to let the user know exacly the index of the character your looking for or not.

var indexFinder = "This method will find an index of a character where it is at in the sentence."

function foundIndex(str) {
  if (indexFinder.indexOf('w') === -1) {
    return 'w is not in this string.'
  } else {
    return `w is found at index: ${indexFinder.indexOf('w')}`
  }
}

var result = foundIndex(indexFinder);
console.log('#4:')
console.log(result)

//#5  Use the slice() method to get a new string.  Slice the string so it say. "Once upon a Time"  Print it in a console.log()

var sliceAndDice = "Once upon a Time in a land far, far away!"

var choppedString = sliceAndDice.slice(0, 16)
console.log('#5:')
console.log(choppedString)



//#6  Now use the slice() method again.  Execpt this time use NEGATIVE numbers as arguments to print out the message "in a land far, far way"  Print it out in a console.log()

var choppedString = sliceAndDice.slice(-24, -1)
console.log('#6:')
console.log(choppedString)




//7  Now do the same thing with slice(), execpt use one POSTIVE and one NEGATIVE number as arguments!  Still printing out "in a land far, far away" in a console.log()

var choppedString = sliceAndDice.slice(17, -1)
console.log('#7:')
console.log(choppedString)