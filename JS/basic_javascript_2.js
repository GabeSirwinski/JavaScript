function myFirstFunction() {
    var hello = "HELLO!";
    var color = hello.fontcolor("red");
    document.getElementById("button").innerHTML = color;
}

function mySecondFunction() {
    var name = "My name is ";
    name += "Gabe";
    document.getElementById("adding-stuff").innerHTML = name; 
}

function calculateTax(meal, tax) {
    var total = (tax/100) * meal + meal;
    var total = "$" + total;
    document.getElementById('calculate').innerHTML = total; 
}