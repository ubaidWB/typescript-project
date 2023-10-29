
import inquirer from "inquirer";
import chalk from "chalk";

class Player {
    name: string;
    fuel: number = 100;

    constructor(name: string) {
        this.name = name;
    }

    fuelDecrease() {
        this.fuel -= 25;
    }

    fuelIncrease() {
        this.fuel = 100;
    }
}

class Opponent {
    name: string;
    fuel: number = 100;

    constructor(name: string) {
        this.name = name;
    }

    fuelDecrease() {
        this.fuel -= 25;
    }
}

(async () => {
    const player = await inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?",
        }
    ]);

    console.log(player.name);

    let gameOver = false;

    while (!gameOver) {
        const opponent_1 = await inquirer.prompt([
            {
                type: "list",
                name: "select",
                message: "Choose your opponent?",
                choices: ["Skeleton", "Assassin", "Zombie"],
            }
        ]);

        const player_game = new Player(player.name);
        const opponent_game = new Opponent(opponent_1.select);

        while (true) {
            const ask = await inquirer.prompt([
                {
                    type: "list",
                    name: "option",
                    message: "What do you want to do?",
                    choices: ["Attack", "Drink Potion", "Run For Your Life"],
                }
            ]);

            if (ask.option === "Attack") {
                const num = Math.floor(Math.random() * 10);

                if (num > 0) {
                    player_game.fuelDecrease();
                } else {
                    opponent_game.fuelDecrease();
                }

                console.log(chalk.bold.red(`${player_game.name} fuel is ${player_game.fuel}`));
                console.log(chalk.bold.red.green(`${opponent_game.name} fuel is ${opponent_game.fuel}`));

                if (player_game.fuel <= 0) {
                    console.log(chalk.red.bold.green.italic("You Lose but try again and best of luck"));
                    break;
                } else if (opponent_game.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You Win!"));
                    break;
                }
            } else if (ask.option === "Drink Potion") {
                player_game.fuelIncrease();
                console.log(chalk.bold.italic(`You drink health protection; your fuel is ${player_game.fuel}`));
            } else if (ask.option === "Run For Your Life") {
                console.log(chalk.red.bold.italic("You didn't win this time, but feel free to give it another shot."));
                break;
            }
        }

        const continueGame = await inquirer.prompt([
            {
                type: "confirm",
                name: "continue",
                message: "Do you want to play again?",
            }
        ]);

        if (!continueGame.continue) {
            gameOver = true;
        }
    }
})();
