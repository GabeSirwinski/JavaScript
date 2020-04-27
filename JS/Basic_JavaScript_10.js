
function Call_Loop() {
    var display = "";
    var counter = 0;
    while (counter < 11) {
        display += "<br>" + counter;
        counter++;
    }
    document.getElementById("Loop").innerHTML = display;
}

var sentence = "Hello, how are you?";

document.getElementById("length").innerHTML = "The string is " + sentence.length + " characters long.";

var instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < instruments.length; Y++) {
        Content += instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() {
    var dogs = [];
    dogs[0] = "barking";
    dogs[1] = "running";
    dogs[2] = "playing";
    document.getElementById("array").innerHTML = "The dog is " + dogs[0] + ".";
}

const iceCream = {flavor: "strawberry", toppingOne: "fudge", toppingTwo: "sprinkles"};

function constant_Function() {
    iceCream.cost = "$5";
    iceCream.flavor = "chocolate";
    document.getElementById("constant").innerHTML = "The " + iceCream.flavor + " ice cream had " + iceCream.toppingOne + " on it.";
}

var N = 55;

function useLet() {
    let N = 40;
    return N;
}

document.getElementById("use-let").innerHTML = "Within the block, N has the value of " + useLet();
document.getElementById("no-let").innerHTML = "Outside of the block, N has the value of " + N;

let animal = {
    color: "black",
    type: "dog",
    weight: "95",
    advertisement: function() {
        return "This is a " + this.color + " " + this.type + " that weighs " + this.weight + " pounds.";
    }
}

function displayAnimal() {
    document.getElementById("display").innerHTML = animal.advertisement();
}

function breakContinue() {
    var break_continue = ""
    for (i = 0; i < 11; i++) {
        if (i === 2) { continue; }
        if (i === 7) { break; }
        break_continue += i + "<br>";
    }
    document.getElementById("break-continue").innerHTML = break_continue;
}
