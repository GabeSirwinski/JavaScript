function theDictionary() {
    var fruit = {
        apples:"Red",
        bananas:"Yellow",
        oranges:"Orange",
        apples: "Green"
    };
    delete fruit.apples;
    document.getElementById("Dictionary").innerHTML = fruit.apples;
}