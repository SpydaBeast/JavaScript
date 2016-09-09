/**
 * Created by Brien on 9/8/2016.
 */


var singleValue;
singleValue = 99;



var multipleValues = [];

    multipleValues[0] = 10;
    multipleValues[1] = 20;


console.log(multipleValues[0]);
console.log(multipleValues[1]); //arrays are object

//second type of array

var multipleValues2 = [a,b,c,d,e,f];
console.log(multipleValues2.length); // length indicates the information about the array

//Array Methods

/*
An method is a function of an object

someFunction(); //to call a function

someObjection.someMethod(); // calls a method
**/

var reverseValues = multipleValues2.reverse();

console.log(reverseValues.join());


