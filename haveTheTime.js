var HOUR = 7;
var MINUTE = 15;
var PERIOD = "PM";

if(PERIOD == "AM" && MINUTE > 30){
    console.log("It's almost " + (HOUR +1) + " in the morning")
}
else if(PERIOD == "PM" && MINUTE > 30){
    console.log("It's almost " + (HOUR + 1) + " in the evening")
}
else if(PERIOD == "AM" && MINUTE < 30){
    console.log("It's just after " + HOUR + " in the morning")
}

else if(PERIOD == "PM" && MINUTE < 30){
    console.log("It's just after " + HOUR + " in the evening")
}