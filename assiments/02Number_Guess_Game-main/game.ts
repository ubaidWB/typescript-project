// PANAVERSE DAO KARACHI


import inquirer from "inquirer";

type ansType = {
    userGuess: number
}

const systemGenrateNumber = Math.floor(Math.random());
// console.log(systemGenrateNumber);

const execute: ansType = await inquirer.prompt([
    {
        type: "number",
        name: "userGuess",
        message: "Enter your number you GUESS: "
    }
])


const { userGuess } = execute;

if (userGuess === systemGenrateNumber) {
    console.log(userGuess, "userGuess", systemGenrateNumber, "sys");
    console.log("Wow Your answer is correct you win!");
} else {
    console.log("Ok no Problem. Please Try Again and (Best Of luck)");
}
