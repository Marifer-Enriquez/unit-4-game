

//global variables

var totalScore = "";
var computerNumber = "";
var wins = 0;
var loses = 0; 

$(document).ready(function(){
//the computer must create a random number between 19 and 120. 
computerGuess = Math.floor((Math.random()*101)+19);
$("#randomNum").text(computerGuess);


//Assign a random number for each crystal between 1 and 12 
var yellow = Math.floor((Math.random()*12)+1);
var purple = Math.floor((Math.random()*12)+1);
var red = Math.floor((Math.random()*12)+1);
var blue = Math.floor((Math.random()*12)+1);
console.log (yellow,purple,red, blue)

//function click for each jewel
$("#yellow").on("click", function(){
    totalScore = totalScore + yellow;
    console.log ("current user sum = " + totalScore);
    $('#gem-worth').text(gemTotal); 
    if (CPguess == gemTotal){
        win();
    }
    else if (CPguess < gemTotal){
        loss();
    }   
})

//Add the number corresponding to each crystal to the global sum



//Once you hit the right number, you win. If you go over it, you lose

//Once you win or lose the game  starts over again


});