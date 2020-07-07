/* 
PLEASE DO NOT TOUCH THE TEST SECTION

ALL FUNCTION HAVE BEEN DECLARED FOR YOU BUT YOU WILL NEED TO 
MANIPULATE THE DEFINITION ALONG WITH THE PARAMETERS



EVERY TIME YOU RUN THE TEST, THE CONSOLE SAVES YOUR LAST TEST CASES
TO REMOVE THEM, CLICK ON THE X SYMBOL AT THE TOP RIGHT INSIDE THE 
CONSOLE

*/ 




/* 
EXAMPLE

CREATE A FUNCTION THAT TAKES ONE ARGUMENT, AN ARRAY, AND ADDS OR MUTATES (MEANING CHANGE) THE ZEROTH ELEMENT TO ZERO AND RETURNS THAT ARRAY

e.g. 

mutateZeroElem([]) ===> [0]
mutateZeroElem([1]) ===> [0]
mutateZeroElem([1,2,3]) ===> [0, 2, 3]

*/ 

function mutateZeroElem(anyArray) {
    // THIS CAN CHANGE THE ARRAY'S ELEMENT, WITHOUT REASSIGNING THE PARAMETER anyArray
   anyArray[0] = 0
   return anyArray
  }
  
  
  /* 
  QUESTION 1
  
  CREATE A FUNCTION THAT TAKES ONE ARGUMENT, AN ARRAY, AND ADDS THE BOOLEAN true TO THE END AND RETURNS THAT ARRAY. DO NOT USE array.push(elem)!!!!!
  
  e.g. 
  
  pushTrue([]) ===> [true]
  pushTrue([1]) ===> [1, true]
  pushTrue([1,2,3]) ===> [1, 2, 3, true]
  
  */ 
  
  function pushTrue(arr) {
    arr[arr.length] = true
    return arr
  }
  
  /* 
  QUESTION 2
  
  CREATE A FUNCTION THAT TAKES TWO ARGUMENTS, AN ARRAY AND A VALUE IT THEN PUSHES THE VALUE INTO THE END OF THE ARGUMENT AND RETURNS THE ARRAY
  PLEASE DO NOT USE array.push()
  
  e.g. 
  
  mutateZeroElem([]) ===> [true]
  mutateZeroElem([1]) ===> [1, true]
  mutateZeroElem([1,2,3]) ===> [1, 2, 3, true]
  
  */ 
  
  
  
  function push(arr, val) {
    arr[arr.length] = val
    return arr
  }
  
  
  
  /* 
  QUESTION 3
  
  CREATE A FUNCTION THAT TAKES ONE ARGUMENTS, AN ARRAY AND THEN ITERATES (LOOPS OVER) THE ARRAY AND LOGS TO THE CONSOLE EACH ELEMENT
  
  
  e.g. 
  
  printElements([1, true, 'I am the third element', 'my index is 3 confusing right']) ===> 
  OUTPUT:
  
  1
  true
  'I am the third element'
  'my index is 3 confusing right'
  
  */ 
  
  
  function printElements(arr) {
    for (i of arr) {
      console.log(i)
    }
  }
  
  
  
  
  /* 
  QUESTION 4
  
  CREATE A FUNCTION THAT TAKES ONE ARGUMENT, AN ARRAY, AND RETURNS A NEW ARRAY THAT HAS ONLY UNIQUE VALUES IN THE SAME ORDER THEY FIRST APPEAR IN THE ORIGINAL ARRAY
  
  DON'T USE indexOF!!!!!!
  
  YOU MAY WANT TO USE AN INNER FOR-LOOP:
  
  for(var i = 0; i < array.length; i++) {
  
    for(var j = 0; j < array2.length; j++) {
  
      DO SOMETHING HERE
  
    }
  }
  
  e.g.
  
  unique([1,1,1,1,1,1]) ===> [1];
  
  unique([1,2,3,2,3,2]) ===> [1, 2, 3];
  */ 
  
  
  function unique(arr) {
  
    // set empty array to fill with unique values
    var uniques = []
    
    for (var i = 0; i < arr.length; i++) {
   
    var notInArray = true 
  
        // Will only run once uniques has 1 element in it
        // because condition (j < uniques.length;) starts at 0
        // which will result in it stopping immediatly because the
        // condition had been met.
        for (var j = 0; j < uniques.length; j++) {  
        
          // When statement is first evaluated, it will
          // compare arr[1] with uniques[0],
          // then arr[2] with uniques[0, 1] ect...
          if (arr[i] === uniques[j]) {
            notInArray = false
            break
          }
        }
  
      // In the first iteration, this will 
      // add first element of arr to uniques
      if (notInArray) {
        uniques.push(arr[i])
      }
    }
    return uniques
  }
   
  
  
  /* 
  QUESTION 5
  
  CREATE A FUNCTION THAT TAKES TWO ARRAYS AND RETURN true IF THEY CONTAIN TWO OF THE SAME ELEMENTS OTHERWISE RETURN FALSE
  DO NOT USE indexOf
  
  arr = [1,2,3,4]
  arr2 = [5,6,2,9]
  
  */ 
  
  function compare(arr1, arr2) {
    
    for (i = 0; i < arr1.length; i++) {
  
      for (j = 0; j < arr2.length; j++) {
        if (arr2[j] == arr1[i]) {
          return true
        }
      }
    }
    return false
  }
  
  /* 
  QUESTION 6
  
  CREATE A FUNCTION THAT TAKES TWO ARRAYS AND RETURNS A NEW ARRAY THAT HAS ELEMENTS THAT BOTH ARGUMENTS CONTAIN, THERE WILL BE NO DUPLICATES
  
  
  compareArrays([1, 2, 3, 4], [5, 6, 7, 8]) ===> []
  compareArrays([1, 2, 3, 4], [1, 2]) ====> [1, 2]
  
  
  */ 
  
  
  function compareArrays(arr1, arr2) {
    
    var newArray = []
    for (i = 0; i < arr1.length; i++) {
  
      for (j = 0; j < arr2.length; j++) {
        if (arr2[j] === arr1[i]) {
          newArray.push(arr1[i])
        }
      }
    }
    return newArray
  }
  
  
  
  /* 
  QUESTION 7
  
  TAKES TWO ARRAYS AND RETURNS AN ARRAY THAT HAS ELEMENTS THAT ARE UNIQUE TO THE FIRST ARRAY!
  
  e.g. 
  
  compareArraysOpposite([1,2,3,4], [1,3]) ===> [2, 4]
  
  */ 
  
  
  
  function compareArraysOpposite(arr1, arr2) {
    
    var unique = []
  
    for (i = 0; i < arr1.length; i++) {
      var notInArr = true
  
      for (j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]) {
          notInArr = false
          break
        }
  
      }
      if (notInArr) {
        unique.push(arr1[i])
      }
    }
    return unique
  }
