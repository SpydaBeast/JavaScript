/**
 * Created by Brien on 9/8/2016.
 */

//string properties
var phrase = "Opps up side the head.";

//string method
console.log(phrase.length); //returns the number of characters
console.log(phrase.toLocaleUpperCase()); //returns the sting in UPPERCASE

//sting method - split
var phraseTwo = "Checkout my split Van Dame said!";
var words = phraseTwo.split(" ");


//String methods - indexOf
var phrasethree = "You can't see what I see.";
var position = phrasethree.indexOf("see");

//String methods - Slice
var phrasefour = "Running out of thing to type strings.";
var  segment = phrasefour = phrasefour.slice(3,6);
