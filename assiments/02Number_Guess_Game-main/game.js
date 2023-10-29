import inquirer from "inquirer";
const systemGenrateNumber = Math.floor(Math.random() * 5);
// console.log(systemGenrateNumber);
const execute = await inquirer.prompt([
    {
        type: "number",
        name: "userGuess",
        message: "Enter your number you GUESS: "
    }
]);
const { userGuess } = execute;
if (userGuess === systemGenrateNumber) {
    console.log(userGuess, "userGuess", systemGenrateNumber, "sys");
    console.log("Wow Your answer is correct \n you win!");
}
else {
    console.log("Ok no Problem. Please Try Again and (Best Of luck)");
}
