// QUIZ APP IN CLI..................


import chalk from "chalk";
import inquirer from "inquirer";
import fetch from "node-fetch";

const apiLink: string = "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple";

let score: number = 0;

interface QuizQuestion {
    question: string;
    incorrect_answers: string[];
    correct_answer: string;
}

async function fetchData(apiLink: string): Promise<QuizQuestion[]> {
    try{
        const fetchQuiz:any = await fetch(apiLink);
        const resData = await fetchQuiz.json();
        return resData.results;
    } catch (error) {
        console.error(`Error fetching data: ${error}`);
        return [];
    }
}

async function startQuiz() {
    let name: string = '';

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
        } else {
            console.log(`Correct answer is ${chalk.bold.italic.red(data[i].correct_answer)}`);
        }
    }

    console.log(`Hello ${chalk.green.bold(name)}, your score is ${chalk.red.bold(score)} out of ${chalk.red.bold(data.length)}`);
}

startQuiz();