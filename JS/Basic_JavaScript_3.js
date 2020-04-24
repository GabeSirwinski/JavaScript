function theFunction() {
    var doMath = (96/4*9) + 58 * 9 - 738;
   
    document.getElementById("Math").innerHTML = "A whole lot of math to do to end up with: " + doMath;
}

function remainder() {
    var math = 22 % 7;
    var math = math++
    var math = math--
    document.getElementById("remainder").innerHTML = "The remainder of 22 divided by 3 is: " + math + ". If you minus 2, it equals " + -math;
}

function luckyNumber() {
    var lucky = Math.random() * 10;
    var round = Math.round(lucky);
    document.getElementById("lucky").innerHTML = "Your lucky number is: " + round;
}