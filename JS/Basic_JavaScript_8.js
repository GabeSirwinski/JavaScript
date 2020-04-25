function sentence() {
    var wordOne = "Hello, ";
    var wordTwo = "how ";
    var wordThree = "are ";
    var wordFour = "you?";
    var allTogether = wordOne.concat(wordTwo, wordThree, wordFour);
    document.getElementById("sentence").innerHTML = allTogether;
}

sentence();

function slice() {
    var response = "good great fine okay terrible wonderful";
    var fine = response.search("fine");
    var answer = response.slice(0,4);
    var upper = answer.toUpperCase();
    document.getElementById("answer").innerHTML = upper;
    document.getElementById("fine").innerHTML = "The word 'fine' starts at position: " + fine + " in the 'response' string."; 
}

function convertToString() {
    var N = 99.5678968596897;
    var precise = N.toPrecision(3)
    document.getElementById("convert").innerHTML = "Our number with 1 decimal is: " + precise.toString() + " and with three decimals is: " + N.toFixed(3) + ".";
}

function findValue() {
    var N = 5.678;
    var word = "Hello";
    console.log(N.valueOf());
    console.log(word.valueOf());
}

findValue();