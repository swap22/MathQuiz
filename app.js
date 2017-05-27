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


 

// hide the element
function hide (Id) {
    document.getElementById(Id).style.display = "none";
}

//show an element

function show (Id) {
    document.getElementById(Id).style.display = "block";
}

var started = false; // the initial state if false as we are asking user to start the game 
//defining click event
//if we click on the start/reset
document.getElementById("startreset").onclick = function () {

    //if we are playing

    if (started == true) {

        location.reload(); //reload page

    } else {//if we are not playing

        //change mode to playing

        started = true;

        //set point to 0

        point = 0;
        document.getElementById("pointCal").innerHTML = point;

        //show countdown box 

        show("timeremaining");
        timeremaining = 60;  // initial timing in second
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;

        //hide game over box

        hide("gameOver");  // state when the game is over

        //change button to reset
        document.getElementById("startreset").innerHTML = "Reset Game";

        //start countdown

        startCountdown();
    }

}
