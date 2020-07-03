/* Challenge #2

#1

In this challenge we want to use the charAt() to print out a specific message
*/

var str = "United States of America"

var murica = str.charAt(0) + str.charAt(7) + str.charAt(17)
console.log('#1:')
console.log(murica.toLowerCase())


// By using the charAt() method print out USA and then I dont want it capitalized. Use the correct method to print out "usa"

/*

#2

In this challenge we want to use the includes() method.  I want to see if the string value in the variable has the specific word put into the includes() argument.  Use Conditionals to keep practicing with If/else statements.
*/


var includesExample = "One small step for man, One giant leap for mankind"

function checkIfHas(str) {
  if (includesExample.includes(str)) {
    return `Yes, string includes: ${str}`
  } else {
    return `No, string does not include: ${str}`
  }
}

console.log('#2:')
console.log(checkIfHas('small'))
console.log(checkIfHas('man'))
console.log(checkIfHas('sun'))
/* 

#3

In this challenge we want to use the toString() method.  This will a variables value into a string when used correctly.  Use Conditionals to keep practicing if/else statements.
print out the message in console.log()
*/

var nums = 2948393920
var converted = ''

function convertThis(num) {
  if (isNaN(num)) {
    return `'${num}' is not a number.`
  } else {
    converted = num.toString()
    return `Here is your new string: ${converted}`
  }
}

console.log('#3:')
console.log(convertThis(34234))
console.log(convertThis('hello'))




