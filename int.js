// OLD code below

//myMessage("");

//var response = prompt("Are you a beaver or duck fanatic?");

//var userInput;   
//console.log(userInput); //undefined because it has only been declared


// if (response === "beaver") {
//     userInput = alert( "congratulations you are on the winning team! :D ");
//     console.log(userInput); //why is userInput undefined?
// } else if (response === "duck") {
//     userInput === alert("FAIL!!! you are on the losing team!!!");
// } else  {
//     userInput === alert("You're a platypus!!!XD");
// }

//console.log(response);  //response value is reassigned per users input..beaver, duck, else
//console.log(userInput); //why is this undefined?

//document.getElementById("user-input").innerHTML = teamChoice;

// var teamChoice = ""; //globally declaring this var

function usrReply() {
    var prmptQuestion = "Are you a beaver or duck Fan?!!!"
    var userInput = prompt(prmptQuestion);
    myMessage(userInput);
}

function myMessage(userInput) {
    teamChoice = userInput;
    console.log(userInput);
    if (userInput === "beaver") {
        alert( "congratulations you are on the winning team! :D ");
        color = "orange"       
    } else if (userInput === "duck") {
        alert("FAIL!!! you are on the losing team!!!");
        color = "yellow"
    } else  {
        alert("You're a platypus!!!XD");
        color = "grey"
    }
}    

var color; //declare the background color
var teamChoice = ""; //globally declaring this var after function declaration

usrReply();

document.getElementById("user-input").innerHTML = teamChoice;
document.getElementById("divColor").style.backgroundColor = color;
