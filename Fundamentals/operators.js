// Uneray Operators
let x = 4;
x = -x;
alert(x);

// Modulo
alert( 5 % 2 ); // 1, the remainder of 5 divided by 2
alert( 8 % 3 ); // 2, the remainder of 8 divided by 3
alert( 8 % 4 ); // 0, the remainder of 8 divided by 4

// Exponentiation
alert( 5 ** 2 ); // 25, 5 raised to the power 2
alert( 8 ** 3 ); // 512, 8 raised to the power 3
alert( 8 ** 4 ); // 4048, 8 raised to the power 4

// String Concatenation
let s1 = "string1";
let s2 = "string2";
let s3 = s1 + s2;
alert(s3);        // string1string2

alert( '1' + 2 ); // "12"
alert( 2 + '1' ); // "21"

alert(2 + 2 + '1' ); // "41" and not "221"
// Here, operators work one after another. The first + sums two numbers, 
// so it returns 4, then the next + adds the string 1 to it, so it’s like 4 + '1' = '41'.

alert('1' + 2 + 2); // "122" and not "14"
// Here, the first operand is a string, the compiler treats the other two operands as 
// strings too. The 2 gets concatenated to '1', so it’s like '1' + 2 = "12" and "12" + 2 = "122".
// The binary + is the only operator that supports strings in such a way. 
// Other arithmetic operators work only with numbers and always convert their operands to numbers.

alert( 6 - '2' ); // 4, converts '2' to a number
alert( '6' / '2' ); // 3, converts both operands to numbers


// Numeric Conversion, unary +
// No effect on numbers
let yx = 1;
alert( +yx ); // 1

let y = -2;
alert( +y ); // -2

// Converts non-numbers
alert( +true ); // 1
alert( +"" );   // 0

let apples = "2";
let oranges = "3";
alert( apples + oranges ); // "23", the binary plus concatenates strings
alert( +apples + +oranges ); // 5, the binary plus converts strings to numbers and then adds
// the longer variant
alert( Number(apples) + Number(oranges) ); // 5

// AND ( & )
// OR ( | )
// XOR ( ^ )
// NOT ( ~ )
// LEFT SHIFT ( << )
// RIGHT SHIFT ( >> )
// ZERO-FILL RIGHT SHIFT ( >>> )


// Tasks

// Task 1
// let a = 1, b = 1;

// let c = ++a; // ?
// let d = b++; // ?

// // After evaluation
// // a = 2 (because of prefix addition)
// // b = 2 (because of postfix addition)
// // c = 2 (because of addition and then assignment(prefix addition))
// // d = 1 (because of assignment and then addition(postfix addition))

// Task 2
let a = 2;

let x = 1 + (a *= 2);
// // After evaluation
// // a = 4 (because of binary multiplication)
// // x = 1 + 4 = 5.
// -----------------------------------------------------------------------------------------


// Task 3

// "" + 1 + 0       =   10  (String Concatenation)
// "" - 1 + 0       =  -1   (Addition, due to - 1)
// true + false     =   1   (true = 1, false = 0, 1 + 0 = 1)
// 6 / "3"          =   2   (division)
// "2" * "3"        =   6   (multiplication)
// 4 + 5 + "px"     =   9px (addition, then concatenation)
// "$" + 4 + 5      =   $45 (concatenation all the way)
// "4" - 2          =   2   (subtraction)
// "4px" - 2        =   NaN   (NaN, cannot subtract from a string)
// "  -9  " + 5     =   " -9 5" (String Concatenation, dual nature of + operator)
// "  -9  " - 5     =   -14 (Simple subtraction)
// null + 1         =   1   (Good!)
// undefined + 1    =   NaN   (undefined becomes NaN after the numeric conversion.)
// " \t \n" - 2     =   -2    (Space characters are trimmed off string start and end when a 
// string is converted to a number. Here the whole string consists of space characters, such 
// as \t, \n and a “regular” space between them. So, similarly to an empty string, it becomes 0)
// -----------------------------------------------------------------------------------------------

// Task 4
let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(a + b); // 12
// To get 3,
alert(+a + +b); // 3

