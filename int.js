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

//********Refactored Code Written Below***********

// Here I will create a Password Prompt

var secretPassword = "Football";    //the expected password stored in its variable

// In the do while loop below, the stored prompt entry (userPasswordEntry will be compared to the stored value)

do {                        
    var userPasswordEntry = prompt("What is the Password?");   //the users input is stored in the variable (userPasswordEntry) via prompt()
} while (userPasswordEntry !== secretPassword);

// Below is my refactored code that stores user input and slaps it on the HTML page

function usrReply() {
    var prmptQuestion = "Are you a beaver or duck Fan?!!!"
    var userInput = prompt(prmptQuestion);
    myMessage(userInput);
 }

function myMessage(userInput) {
    teamChoice = userInput;
    console.log(userInput);
        if (userInput === "beaver") {
            alert( "congratulations you the better team! :D ");
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

//Here I will create a prompt for the user to ask how many stars would they rate the USABILITY and LOGIC of the page

function addStarToDocument() {
    var userResponse = prompt("From 5 stars being Great and 1 star being Poor, How many Stars would you like to give this page?"); 
    return userResponse;
}
// originally in the funciton above, i had not declared userResponse and in turn it would not return the value of userResponse. I fixed it by declareing the userResponse as written in the function above.

var usrRating = addStarToDocument();

//Here I will create a For loop that will generate the desired number of "stars" based on the value passed from the addStarToDocument function in the usrRating variable

for (var i = 1; i <= usrRating; i++) {
    document.write("<img src = \"images/star.jpg\">");
}

//it works. Next step is to refactor my code and make it more efficient by perhaps reusing functions or re-purposing user data