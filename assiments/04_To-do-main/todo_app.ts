// TODOS APP IN TYPESCRIPT PANAVERSE DAO


import inquirer from "inquirer";

let todosapp: string[] = [];

let loop = true;

while (loop) {
    const answer: {
        toDO_app: string,
        AddMORE: boolean
    } = await inquirer.prompt([
        {
            type: "input",
            name: "toDO_app",
            message: "Would you like to include additional ITEMS?"
        },
        {
            type: "confirm",
            name: "AddMORE",
            message: "You can ADD More Item",
            default: false
        }
    ])
    const { toDO_app, AddMORE } = answer;
    console.log(answer)
    loop = AddMORE
    if (toDO_app) {
        todosapp.push(toDO_app)
    } else {
        console.log("Kindly add valid input")
    }
}

if (todosapp.length > 0) {
    console.log("Your TODOLIST: ");
    todosapp.forEach(todo => {
        console.log(todo);
    });
} else {
    console.log("NO TODOS ");

}

if (todosapp.length > 0) {
    console.log("todo app: \N");
    todosapp.forEach(todo => {
        console.log(todo);   
    });

} else {
    console.log("NO TODOS ");

}
