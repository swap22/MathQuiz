//global variable

var point;
var action;
var timeremaining;
var correctAnswer;

/*function to write count the point
changing the question
changing the option
count watch
 */


//defining click event

// initial point set
point = 0;
document.getElementById("pointCal").innerHTML = point;
// setting the count down
timeremaining = 60;
show("timeremaining");
document.getElementById("timeremainingvalue").innerHTML = timeremaining; 

//hidding game over box

hide("gameOver");

//change button to reset
document.getElementById("startreset").innerHTML = "Reset Game";