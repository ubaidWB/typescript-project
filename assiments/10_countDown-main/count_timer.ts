import { differenceInSeconds } from "date-fns";
import inquirer from "inquirer";

const execute = await inquirer.prompt({
    type: "number",
    name: "userInput",
    message: "Please enter the number of seconds:",
    validate: (input) => {
        if (isNaN(input)) {
            return "Please enter a valid number.";
        } else if (input > 60) {
            return "Seconds must be less than or equal to 60.";
        } else if (input <= 0) {
            return "Seconds must be a positive number.";
        } else {
            return true;
        }
    }
});

let input = execute.userInput
function startTime(count_dwon: number) {
    const intTime = new Date().setSeconds(new Date().getSeconds() + count_dwon);
    const intervalTime = new Date(intTime);
    setInterval(() => {
        const currentTime = new Date()
        const timeDiff = differenceInSeconds(intervalTime, currentTime);
        if (timeDiff <= 0) {
            console.log("Time's Up");
            process.exit();

        }
        const minute = Math.floor((timeDiff % (3600 * 24)) / 3600);
        const second = Math.floor(timeDiff % 60);
        console.log(`${minute.toString().padStart(2,"0")}:${second.toString().padStart(2,"0")}`);


    }, 1000);
}
startTime(input)