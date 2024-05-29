// Initialization
let user1 = new Object(); // "object constructor" syntax
let user2 = {};  // "object literal" syntax

// Properties and objects
let user3 = {       // an object
    name: "John",  // by key "name" store value "John"
    age: 30        // by key "age" store value 30
  };

// get property values of the object:
alert( user3.name ); // John
alert( user3.age ); // 30

// To remove a property, we can use the delete operator:
delete user1.age;

// We can also use multiword property names, but then they must be quoted:
let user = {
  name: "John",
  age: 30,
  "likes birds": true  // multiword property name must be quoted
};

let key = "likes birds";
// same as user["likes birds"] = true;
user[key] = true;

let user = { name: "John", age: 30 };
alert( "age" in user ); // true, user.age exists
alert( "blabla" in user ); // false, user.blabla doesn't exist

let user = {
    name: "John",
    age: 30,
    isAdmin: true
  };
  
for (let key in user) {
// keys
alert( key );  // name, age, isAdmin
// values for the keys
alert( user[key] ); // John, 30, true
  }


// Are objects ordered? In other words, if we loop over an object, 
// do we get all properties in the same order they were added? 
// Can we rely on this?

// The short answer is: “ordered in a special fashion”: 
// integer properties are sorted, others appear in creation order.


// Tasks

// Task 1
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

// Task 2
function isEmpty(obj) {
    for (let key in obj) {
      // if the loop has started, there is a property
      return false;
    }
    return true;
  }

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false

// Task 3
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

function sumOfSalaries(obj)
{
    let totalSalary = 0;
    for(let personel in obj)
    {
        totalSalary += obj[personel];
    }

    return totalSalary;
}

// Task 4
// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

function multiplyNumeric(obj)
{
    for(let property in obj)
    {
      if(typeof(property) === 'number')
      {
        object[property] *= 2;
      }
    }
}  

multiplyNumeric(menu);
  
// after the call
//   menu = {
//     width: 400,
//     height: 600,
//     title: "My menu"
//   };