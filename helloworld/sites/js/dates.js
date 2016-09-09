/**
 * Created by Brien on 9/9/2016.
 */

var myDate = new Date(1982,9,7);  //Using the Date object
console.log("My Birthday", myDate.getDate());

today.getTime();
console.log(myDate.getTime());

//comparing Dates
var date1 = new Date(2000,0,1);
var date2 = new Date(2000,0,1);

if (date1 == date2) { //this will return False
}

if (date1.getTime() == date2.getTime()){ //this will return True
}