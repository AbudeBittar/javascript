//// Get age and convert it to a Number (prompt always returns a String)
var age = Number(prompt("What is your age?"));
// alert("Nice to meet you, " + userName);
// console.log("Also great to meet you, " + userName);
if(age < 0) {
    console.log("Come back once you're out of the womb"); //age cann't be negative
}
if(age == 21){
    console.log("happy 21st birthday");
}
if( (age % 2) == 1){
    console.log("your age is odd");
}
if(age % Math.sqrt(age) === 0) {
    console.log("Your age is a perfect square!");
}