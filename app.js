//global variable

var point;
var action;
var timeremaining;
var answer;

/*function to write count the point

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

        //generate a new Q&A

        QA();
    }

}

//start counter

function startCountdown () {
    action = setInterval(function () {
        timeremaining -= 1;  //decrementing the time
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;
        if (timeremaining == 0) {// game over
            stopCountdown();
            show("gameOver");

            //to show the score message
            document.getElementById("gameOver").innerHTML = "<p>Game over!</p><p>Your point is " + point + ".</p>";
            
            //adding hide for other events
            hide("timeremaining");
           
            playing = false;
            document.getElementById("startreset").innerHTML = "Start Game";
        }
    }, 1000);// wait for 1000ms
}
//stop counter

function stopCountdown () {
    clearInterval(action);
}
function QA(){
    var x = 1 + Math.ceil(10 * Math.random());
    var y = 1 + Math.ceil(10 * Math.random());
    answer= x*y;
    document.getElementById("problem").innerHTML =x+"x"+y;

    var correctPosition = 1 + Math.round(3 * Math.random());
    document.getElementById("box" + correctPosition).innerHTML = answer; //fill one box with the correct answer

    //fill other boxes with wrong answers

    var answers = [answer];

    for (i = 1; i < 5; i++) {
        if (i != correctPosition) {
            var wrongAnswer;
            do {
                wrongAnswer = (1 + Math.ceil(10 * Math.random())) * (1 + Math.ceil(10 * Math.random())); //a wrong answer
            } while (answers.indexOf(wrongAnswer) > -1) // fill other element other 
            document.getElementById("box" + i).innerHTML = wrongAnswer;
            answers.push(wrongAnswer); // added element at the end
        }
    }
}