function rideFunction() {
    var Height, canRide;
    Height = document.getElementById("Height").value;
    canRide = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = canRide + " to ride!";
}

function canVote() {
    var age, oldEnough;
    age = document.getElementById("age").value;
    oldEnough = (age > 18) ? "You are old enough":"You are too young";
    document.getElementById("vote").innerHTML = oldEnough + " to vote.";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

var Gabe = new Vehicle("Acura", "TSX", 2009, "Grey/Silver")

function Fruit(Type, Size, Ripe) {
    this.Fruit_Type = Type;
    this.Fruit_Size = Size;
    this.Fruit_Ripe = Ripe;
}

var apple = new Fruit("Apple", "Medium", true);
var banana = new Fruit("Banana", "Small", false);

function newFruit() {
    var fruitRipe = (apple.Fruit_Ripe == true) ? "It is ripe":"It is not ripe";
    document.getElementById("New_and_This").innerHTML = "Name of fruit: " + apple.Fruit_Type + ". Size of fruit: " + apple.Fruit_Size + ". Is Ripe? " + fruitRipe + ".";
}

function Customer(Name, Age, Active, Visits) {
    this.Customer_Name = Name;
    this.Customer_Age = Age;
    this.Customer_Active = Active;
    this.Customer_Visits = Visits;
}

var John = new Customer("John", 68, true, 10);


function calculateTax() {
    var rate, tax, total, amount;
    amount = 17;
    rate = 9;
    tax = rate * amount / 100;
    function addTax() {
        total = amount + tax;
        return total;
    }
    addTax();
    document.getElementById("Nested_Function").innerHTML = total;
}