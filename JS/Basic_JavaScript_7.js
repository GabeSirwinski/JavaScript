var X = 20;

function addStuff() {
    var total = X + 20;
    console.log(total);
}

function subtractStuff() {
    var subtract = X - 20;
    console.log(subtract);
}

addStuff();

subtractStuff();

function getDate() {
    if (new Date().getHours() < 18) {
        document.getElementById("date").innerHTML = "How are you today?";
    }
}

getDate()

function leaveTip() {
    if (document.getElementById("tip").value == "Yes") {
        document.getElementById("response").innerHTML = "Okay, great!";
    }
}

function howFast() {
    var Reply, Speed;
    Speed = document.getElementById("speed").value;
    if (Speed > 80) {
        Reply = "Woah there! Slow down!";
    } else if (Speed < 79 && Speed > 60) {
        Reply = "Just right!";
    } else {
        Reply = "You need to speed up!";
    }
    document.getElementById("how-fast").innerHTML = Reply;
}

function Time_Function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time";
    } else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon";
    } else {
        Reply = "It is evening time";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}