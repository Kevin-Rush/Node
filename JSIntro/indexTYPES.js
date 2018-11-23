//two types of Types, Value types and Reference types

let x = 10;
let y = x;

x = 20;

//x and y are two independent variables

//lets see what happens when we use reference types

let a = {value: 10};
let b = a;

a.value=20;

//now if a is updated b will be updated to because b = the point in memeory a was stored not the actual value like above
//i.e. a and b are pointing to the same section of the memory
//therefore: Primatives are copied by their value while objects are copied by their reference

let number = 10;
function increase(number){
    number++;//this number variable is independent of the number variable above
}

increase(number);
console.log(number);

let obj = {value: 10};
function increase(obj){
    obj.value++;
}

increase(obj);  
console.log(obj);   //we now have two variables pointing to the same value in memory