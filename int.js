var response = prompt("Are you a beaver or duck fanatic?");

var userInput;

if (response === "beaver") {
    userInput = alert( "congratulations you are on the winning team! :D ");
} else if (response === "duck") {
    userInput = alert("FAIL!!! you are on the losing team!!!");
} else  {
    userInput = alert("You're a platypus!!!XD");
}

console.log(userInput);

var element = document.getElementById("user-responses");
element.innerText = console.log(userInput);