#!usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 18 + 1);
const asnwers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Kindly opt for a number between 1 and 18",
    },
]);
if (asnwers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! You Have guessed a correct number");
    console.log("You Have A Good Sixth Sense");
}
else {
    console.log("Alas! You have guessed a wrong number");
    console.log("Better luck next time");
}
console.log(randomNumber);
