/**
 * Created by Brien on 9/9/2016.
 */

//Object 1 - Array
var myArray = [10,20,30,40];
console.log(myArray.length);

//Object 2 - Date
var todaysDate = new Date();
console.log(todaysDate.getTime());

//Object Creation
// An object is a container of data and behavior

var playerName = "Fred";
var playerScore = 10000;
var playerRank = 2;

var player = new Object(); //Object container

//Object is filled wih data
player.name = "Brien"; // var inside an object is called a properties
player.score = "10000000";
player.rank = "1";

//shorthand for creating an object
    var player1 = {name: "Bob", score: 10000, rank: 1}; // Inside braces use name:value pair
    console.log(player1.name);
    var player2 = {name: "John", score: 100, rank: 3};
    console.log(player2.name);

//Give Object behavior
function  playerDetails(){
    //display player info
    console.log(this.name + "has a rank of: " + this.rank // "this" goes into the current property
        + " and a score of: " + this.score);
}
player1.logDetails = playerDetails(); //set the value of the logDetails method equal to the player details
player2.logDetails = playerDetails();

player1.logDetails(); //call the logDetails method
player2.logDetails();
