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