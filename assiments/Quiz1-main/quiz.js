// import chalk from "chalk";
// import inquirer from "inquirer";
// const apiLink: string = "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple"
//     "link"
// let fetchData = async (data: string) => {
//     let fetchQuize: any = await fetch(data);
//     let responeseData = await fetchQuize.json();
//     return responeseData.results;
// }
// let data = await fetchData(apiLink);
// let startQuiz = async () => {
//     let question: number = 0;
//     let questions = await inquirer.prompt({
//         type: "input",
//         name: "fname",
//         message: "What is your name?",
//     });
//     for (let i = 1; i < 5 i++) {
//         let answers = [...data[i].incorrect_answers, data[i].correct_answer];
//         let answer = await inquirer.prompt({
//             type: "list",
//             name: "Quiz",
//             message: data[i].question,
//             choices: answers.map((val: any) => val),
//         });
//         if (answer.Quiz == data[i].correct_answer) {
//             ++score;
//             console.log(chalk.bold.italic.blue("correct"));      
//         } else {
//             console.log(`correct anser is ${chalk.bold.italic.red(data[i].correct_answer)}`);
//         }
//         console.log(`hello ${chalk.green.bold(name.fname)}, your score is 
//         ${chalk.red.bold(score)} out of ${chalk.red.bold('5')}`);
//     };
//     startQuiz();
// import chalk from "chalk";
// import inquirer from "inquirer";
// import fetch from "node-fetch"; // Import the 'fetch' function
// const apiLink: string = "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple"; // Correct the API link
// let score: number = 0;
// let fetchData = async (data: string) => {
//     try {
//         const fetchQuiz = await fetch(data);
//         const responseData = await fetchQuiz.json();
//         return responseData.results;
//     } catch (error) {
//         console.error(`Error fetching data: ${error}`);
//         return [];
//     }
// };
// let startQuiz = async () => {
//     let question: number = 0;
//     let name: string = '';
//     let questions = await inquirer.prompt({
//         type: "input",
//         name: "fname",
//         message: "What is your name?",
//     });
//     name = questions.fname;
//     const data = await fetchData(apiLink);
//     for (let i = 0; i < 5; i++) { // Corrected the loop condition
//         let answers = [...data[i].incorrect_answers, data[i].correct_answer];
//         let answer = await inquirer.prompt({
//             type: "list",
//             name: "Quiz",
//             message: data[i].question,
//             choices: answers.map((val: any) => val),
//         });
//         if (answer.Quiz == data[i].correct_answer) {
//             ++score;
//             console.log(chalk.bold.italic.blue("Correct"));
//         } else {
//             console.log(`Correct answer is ${chalk.bold.italic.red(data[i].correct_answer)}`);
//         }
//     }
//     console.log(`Hello ${chalk.green.bold(name)}, your score is 
//         ${chalk.red.bold(score)} out of ${chalk.red.bold('5')}`);
// };
// startQuiz();
import chalk from "chalk";
import inquirer from "inquirer";
import fetch from "node-fetch";
const apiLink = "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple";
let score = 0;
async function fetchData(apiLink) {
    try {
        const fetchQuiz = await fetch(apiLink);
        const resData = await fetchQuiz.json();
        return resData.results;
    }
    catch (error) {
        console.error(`Error fetching data: ${error}`);
        return [];
    }
}
async function startQuiz() {
    let name = '';
    const questions = await inquirer.prompt({
        type: "input",
        name: "fname",
        message: "What is your name?",
    });
    name = questions.fname;
    const data = await fetchData(apiLink);
    for (let i = 0; i < data.length; i++) {
        let answers = [...data[i].incorrect_answers, data[i].correct_answer];
        const answer = await inquirer.prompt({
            type: "list",
            name: "Quiz",
            message: data[i].question,
            choices: answers,
        });
        if (answer.Quiz === data[i].correct_answer) {
            score++;
            console.log(chalk.bold.italic.blue("Correct"));
        }
        else {
            console.log(`Correct answer is ${chalk.bold.italic.red(data[i].correct_answer)}`);
        }
    }
    console.log(`Hello ${chalk.green.bold(name)}, your score is ${chalk.red.bold(score)} out of ${chalk.red.bold(data.length)}`);
}
startQuiz();
