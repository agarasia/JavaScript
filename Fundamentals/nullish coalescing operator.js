result = a ?? b;
/* 
        ^
        |
        v
*/
result = (a !== null && a !== undefined) ? a : b;

let user;
alert(user ?? "Anonymous"); // Anonymous (user is undefined)

let user2 = "John";
alert(user2 ?? "Anonymous"); // John (user is not null/undefined)

let firstName = null;
let lastName = null;
let nickName = "Supercoder";
// shows the first defined value:
alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder
// is equivalent to:
alert(firstName || lastName || nickName || "Anonymous");


// The precedence of the ?? operator is the same as ||. They both equal 3 in the MDN table.

// That means that, just like ||, the nullish coalescing operator ?? is evaluated before = and ?, but after most other operations, such as +, *.

// So we may need to add parentheses in expressions like this:

let height = null;
let width = null;

// important: use parentheses
let area = (height ?? 100) * (width ?? 50);

alert(area); // 5000