// ### Question 1

// `console.log` a number in each part of the code which represents your guess as to what order the code will be executed in.  Run the code.  The numbers should be logged in order: 1, 2, 3, 4... If they aren't, read and experiment with the code to figure out why.  Co


console.log('hello!')

$(document).click(function(clickEvent) {
  console.log("The click event:", clickEvent);
});



// ### Question 2

// 1. `console.log` a number in each part of the code which represents your guess as to what order the code will be executed in.  Run the code.  The numbers should be logged in order: 1, 2, 3, 4... If they aren't, follow the flow of control to figure out why.  Correct the `console.log`s.
// 2. Explain what is happening in the code to your pair partner(s).

console.log('People response 1')
$.get("https://async-workshops-api.herokuapp.com/people", function(peopleResponse) {
  console.log('People response 3')
  console.log("People response:", peopleResponse);
  console.log('People response 4')
  console.log('People response 5')
});
console.log('People response 2')




// ### Question 3

// 1. `console.log` a number in each part of the code which represents your guess as to what order the code will be executed in.  Run the code.  The numbers should be logged in order: 1, 2, 3, 4... If they aren't, follow the flow of control to figure out why.  Correct the `console.log`s.

// 2. What value does `getReturnValue` have? What value does `peopleResponse` have? Why are they different?

console.log(1)
var getReturnValue = $.get("https://async-workshops-api.herokuapp.com/people", function(peopleResponse) {
  console.log(4)  
  console.log(5)
  return peopleResponse;
  console.log(6)
  
});
   console.log(2)
   console.log(3)


//    ### Question 4

// 1. `console.log` a number in each part of the code which represents your guess as to what order the code will be executed in.  Run the code.  The numbers should be logged in order: 1, 2, 3, 4... If they aren't, follow the flow of control to figure out why.  Correct the `console.log`s.
// 2. Where do the values for `person` come from?

console.log(1)
 $.get("https://async-workshops-api.herokuapp.com/people", function(peopleResponse) {
 console.log(4)
peopleResponse.forEach(function(person) {     
  console.log(5)
   console.log(person.name);
  });
});
 console.log(2)
 console.log(3)

 //Notes: line 58, since we are using the 'for' loop, it will loop through the names and assign the current digit to each name. Run this in your console to Selection. 

   // ### Question 5
// `console.log` a number in each part of the code which represents your guess as to what order the code will be executed in.  Run the code.  The numbers should be logged in order: 1, 2, 3, 4... If they aren't, follow the flow of control to figure out why.  Correct the `console.log`s.

console.log(1);
setTimeout(function hiThere(){
  console.log(3);
  console.log("Hi there!");
  console.log(4);
}, 20000)
console.log(2)
console.log(3);