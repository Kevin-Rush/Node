
let name='KR';

console.log(name);

//Varaibles cannot be a reserved keyword (i.e. if, let, var, etc)
//should be meaningful
//cannot strt with a number 
//cannot contain a spacea or a hyphen
//put them together with either camel case or underscores  (i.e. firstName, first_name)
//variables are case sensitive 
//multiple variables can be initialized on the same line, but best practice is to split them up line by line

let firstName = 'Kevin';
let lastName = 'Rush';

//constants
const intRate = 0.3; //constants
//intRate = 1;    //this will throw an error 
console.log(intRate);

//in general you should use const unless it will be changed in that case use let

//PrimativeTypes

//Primateives = Strings, Numbers, booleans, undefined and null

name = 'Kevin'; //this is a string literal
let age = 30 ; //number literal
let isApproved = true; //boolean literal
let newName; // by defualt set to undefined, but you can also state undefined
let blankName = null; //used to clear the value of a variable

//Dynamic Typing

//js is a dynamic language
//there are static languages and there are static languages
//static langugaes have a variable that is set and can never be changed
//dynamic languages allow variables to change 

//Objects

//reference types are Objects Arrays and functions

let person = {
    name: 'Kevin',
    age: 30
};

//Dot notation
person.name='John';

console.log(person.name);

//bracket notation
person['name'] = 'Mary';
console.log(person.name);

//arrays