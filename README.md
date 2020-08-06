# Callbacks and following the flow of control

## Instructions

### High level goal for the week

At a high level, this week is about building the skills that let you learn a new language and its patterns.  In this workshop, you'll practice following the flow of control to understand the callbacks JavaScript pattern.

### Learning objectives

1. Describe "the flow of control of a program" as "the order in which the parts of the code are executed".
2. Explain the process you use to follow the flow of control.
3. Follow the flow of control to help you understand how callbacks work.

### Following the flow of control

```js
document.addEventListener('click', function() {
  console.log("click!");
});

```

1. Before running the code, add some `console.log`s.  Log `console.log(1)` in the bit of code you think will get run first, `console.log(2)` in the bit of code you think will get run second, and so on. For example:

```js
console.log(1);

document.addEventListener('click', function() {
  console.log(2);
  console.log("click!");
  console.log(3);
});

console.log(4);
```

2. Run the code to see if the numbers get printed in order (1, 2, 3 etc.).  If they do, your prediction is correct.

3. If your prediction is incorrect, examine the code and experiment with it to try to figure out why.  Once you have more information, update your `console.log`s to reflect your prediction and return to step 2.

#### Following the flow fast

A developer constantly analyses the flow of control of their code.  Keep trying to improve this skill.  The more adept you are at reading the flow of control without running the code, the faster you'll be.  Build this intuition by making predictions and checking if your prediction is right.

### Demo

I'll follow the flow of control in this code:

```js
document.addEventListener('click', function() {
  console.log("click!");
});
```

### Work through the questions (30 mins)


### Steps
1. Clone the [repo](https://github.com/makersacademy/skills-workshops/blob/master/week-5/callbacks_following_the_flow_of_control/README.md). 

2. Open the `index.html` file in your web browser.

3. Open the browser console.

4. You should see `hello!`.

5. Open `index.js` in your text editor.

6. For each question, paste the provided code into `index.js`. The code for question 1 (below) is currently in `index.js`.



## Questions - 
_to be found inn index.js_

Follow the process for understanding the flow of control that we used in the demo.

### Question 1

`console.log` a number in each part of the code which represents your guess as to what order the code will be executed in.  Run the code.  The numbers should be logged in order: 1, 2, 3, 4... If they aren't, read and experiment with the code to figure out why.  Correct the `console.log`s.

```js
$(document).click(function(clickEvent) {
  console.log("The click event:", clickEvent);
});
```

### Question 2

1. `console.log` a number in each part of the code which represents your guess as to what order the code will be executed in.  Run the code.  The numbers should be logged in order: 1, 2, 3, 4... If they aren't, follow the flow of control to figure out why.  Correct the `console.log`s.
2. Explain what is happening in the code to your pair partner(s).

```js
$.get("https://async-workshops-api.herokuapp.com/people", function(peopleResponse) {
  console.log("People response:", peopleResponse);
});
```

### Question 3

1. `console.log` a number in each part of the code which represents your guess as to what order the code will be executed in.  Run the code.  The numbers should be logged in order: 1, 2, 3, 4... If they aren't, follow the flow of control to figure out why.  Correct the `console.log`s.

2. What value does `getReturnValue` have? What value does `peopleResponse` have? Why are they different?

```js
var getReturnValue = $.get("https://async-workshops-api.herokuapp.com/people", function(peopleResponse) {
  return peopleResponse;

});
```

### Question 4

1. `console.log` a number in each part of the code which represents your guess as to what order the code will be executed in.  Run the code.  The numbers should be logged in order: 1, 2, 3, 4... If they aren't, follow the flow of control to figure out why.  Correct the `console.log`s.
2. Where do the values for `person` come from?

```js
$.get("https://async-workshops-api.herokuapp.com/people", function(peopleResponse) {
  peopleResponse.forEach(function(person) {
    console.log(person.name);
  });
});
```

### Question 5
`console.log` a number in each part of the code which represents your guess as to what order the code will be executed in.  Run the code.  The numbers should be logged in order: 1, 2, 3, 4... If they aren't, follow the flow of control to figure out why.  Correct the `console.log`s.

```js
setTimeout(function hiThere(){
  console.log("Hi there!");
}, 0)
```
#0 = how many milliseconds it takes for the console to load

## Resources

* [JavaScript event loop](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
* [Callbacks tutorial](http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/)
