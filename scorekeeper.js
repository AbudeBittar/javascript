var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");
var p1Score = document.getElementById("p1-score");
var p2Score = document.getElementById("p2-score");
var reset = document.getElementById("reset");
var numToPlay = document.getElementById("numToPlay");
var numInput = document.querySelector("input[type = number]");

var score1 = 0;
var score2 = 0;
var gameOver = false;
var winningScore = 5;

console.log( numToPlay, numInput);


player1.addEventListener("click", function(){
    if(!gameOver){
        score1++;
        if(score1 === winningScore){
            gameOver = true;
            p1Score.classList.add("winner");
        }
        p1Score.textContent = score1;
    }
});

player2.addEventListener("click", function(){
    if(!gameOver){
        score2++;
        if(score2 === winningScore){
            gameOver = true;
            p2Score.classList.add("winner");
        }
        p2Score.textContent = score2;
    }
});

function resetFunc(){
    score1 = 0;
    score2 = 0;
    p1Score.textContent = score1;
    p2Score.textContent = score2;
    p1Score.classList.remove("winner");
    p2Score.classList.remove("winner");
    gameOver = false;
}

reset.addEventListener("click", function(){
    resetFunc();
});



// a change event will run any time the value changes and it doesn't matter how that value changed. 
// If it was because I clicked or hit the delete key.
numInput.addEventListener("change", function(){
    // ___.value returns a string that has the value in the input 
    numToPlay.textContent = this.value; // Number(this.value);
    winningScore = Number(this.value);  // numInput.value is equivalent to this.value becouse we're already in numInput.
    resetFunc();
});