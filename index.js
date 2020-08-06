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
