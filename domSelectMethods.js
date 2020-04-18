console.log("Connected");

// Come up with 4 different ways to select the first <p> tag.com

// first way
var firstWay = document.getElementById("first");
console.log("firstWay: " + firstWay );


// second way
var secondWay = document.getElementsByClassName("special")[0];
console.log("secondWay: " + secondWay );

// third way
var thirdWay = document.getElementsByTagName("p")[0];
console.log("thirdWay: " + thirdWay );

// fourth way
var fourthWay = document.querySelector("#first");
console.log("fourthWay: " + fourthWay );