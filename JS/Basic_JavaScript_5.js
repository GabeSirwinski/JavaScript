

function weOutHereTryinaFunction() {
    var notANumber = 0/0;
    var infinity = 50000000000000000000000000000000000000000000000000000000000E500000000000000000000000000000000000000000000000000000;
    var negativeInfinity = -infinity;
    document.getElementById("lol").innerHTML = notANumber;
    document.getElementById("hi").innerHTML = infinity;
    document.getElementById("bye").innerHTML = negativeInfinity;
}

function getNAN() {
    var nan = isNaN('8');
    document.getElementById("hello").innerHTML = nan;
}

document.getElementById("goodbye").innerHTML = isNaN("hello");

document.write("Ten is greater than 7: " + (10 > 7) + ".");

console.log(2 + 2);

document.write(" The string 'How old are you? 10' plus the number '5' would look like: " + "How old are you? 10" + 5 + ".");

console.log(10 > 100);

document.write(" This shows if 10X10 is equal to 5X20: " + ((10 * 10) == (5 * 20)) + ". ");

document.write("This displays if '8' and 'Eight' are equal when seeing if they are NOT numbers: " + (isNaN('8') == isNaN('Eight')));

function trueOrFalse() {
    var X = 10;
    var Y = 'ten';
    var Z = 10;
    var A = 11;
    var trueOne = X === Z;
    var falseOne = X === Y;
    var falseTwo = X === A;
    var falseThree = Y === A;
    document.getElementById("true").innerHTML = "10 is equal to 10: " + trueOne;
    document.getElementById("false-one").innerHTML = "Ten is equal to 10: " + falseOne;
    document.getElementById("false-two").innerHTML = "10 is equal to 11: " + falseTwo;
    document.getElementById("false-three").innerHTML = "Ten is equal to 11: " + falseThree;
}

document.write(". '10 is greater than 5' AND '6 is greater than 1': " + (10>5 && 6>1));

document.write(". '5 is greater than 10' OR '1 is greater than 6': " + (5>10 || 1>6));

document.write(". 5 is NOT greater than 1: " + !(5>1));