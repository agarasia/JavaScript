// Arrow functions are handy for simple actions, 
// especially for one-liners. They come in two flavors:

// Without curly braces: (...args) => expression – the right
// side is an expression: the function evaluates it and returns 
// the result. Parentheses can be omitted, if there’s only a 
// single argument, e.g. n => n*2.


// With curly braces: (...args) => { body } – brackets allow us 
// to write multiple statements inside the function, 
// but we need an explicit return to return something.


// Task 1
// Replace Function Expressions with arrow functions in the code below:

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// ask(
//   "Do you agree?",
//   function() { alert("You agreed."); },
//   function() { alert("You canceled the execution."); }
// );

function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }
  
  ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
  );