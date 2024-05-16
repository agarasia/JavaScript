// A function declaration looks like this:

// function name(parameters, delimited, by, comma) {
//   /* code */
// }
// Values passed to a function as parameters are copied to its local variables.
// A function may access outer variables. But it works only from inside out. 
// The code outside of the function doesn’t see its local variables.
// A function can return a value. If it doesn’t, then its result is undefined.
// To make the code clean and easy to understand, 
// it’s recommended to use mainly local variables and parameters in the function, 
// not outer variables.

// It is always easier to understand a function which gets parameters, works with 
// them and returns a result than a function which gets no parameters, but modifies 
// outer variables as a side effect.

// Function naming:

// A name should clearly describe what the function does. When we see a function 
// call in the code, a good name instantly gives us an understanding what it does and returns.
// A function is an action, so function names are usually verbal.
// There exist many well-known function prefixes like create…, show…, get…, 
// check… and so on. Use them to hint what a function does.
// Functions are the main building blocks of scripts. Now we’ve covered the basics, 
// so we actually can start creating and using them. But that’s only the beginning of 
// the path. We are going to return to them many times, going more deeply into their 
// advanced features.


// Task 2

// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Did parents allow you?');
//     }
//   }
//   Rewrite it, to perform the same, but without if, in a single line.
  
//   Make two variants of checkAge:
  
//   Using a question mark operator ?
function checkAge1(age)
{
    return age > 18 ? true : confirm('Did parents allow you?');
}

//   Using OR ||
function checkAge2(age)
{
    return age > 18 || confirm('Did parents allow you?');
}


// Task 3
// Write a function min(a,b) which returns the least of two numbers a and b.
function min(a, b)
{
    return a < b ? a : b;
}


// Task 4
// Write a function pow(x,n) that returns x in power n.
// Or, in other words, multiplies x by itself n times and returns the result.

// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
// Create a web-page that prompts for x and n, and then shows the result of pow(x,n).
let x = prompt('x: ', '');
let n = prompt('n: ', '');

function pow(x, n)
{
    if(n==0)    return 1;
    else    return x * pow(x, n-1);
}

alert(pow(x,n));