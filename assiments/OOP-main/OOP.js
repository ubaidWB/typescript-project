import inquirer from "inquirer";
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Person {
    students = [];
    addStudent(student) {
        this.students.push(student);
    }
}
const person = new Person();
const programStart = async (persons) => {
    do {
        console.log("Welcome Guest");
        const execute = await inquirer.prompt([
            {
                type: "list",
                message: "Who do you want to talk to?",
                name: "select",
                choices: ["By Myself", "Student"],
            }
        ]);
        if (execute.select === "By Myself") {
            console.log("Welcome Student By Myself");
            console.log("I am Good well.");
        }
        if (execute.select === "Student") {
            const studentExecute = await inquirer.prompt({
                type: "input",
                message: "Whom would you like to talk to?",
                name: "student",
            });
            const student = persons.students.find((val) => val.name === studentExecute.student);
            if (!student) {
                const name = new Student(studentExecute.student);
                persons.addStudent(name);
                console.log(`Hello, I am ${name.name}, and I am good well.`);
                console.log(persons.students);
            }
            if (student) {
                console.log(`Hello, I am ${student.name}, and I am good well, Bro`);
                console.log(persons.students);
            }
        }
    } while (true);
};
programStart(person);
// import inquirer from "inquirer";
// import Choice from "inquirer/lib/objects/choice.js";
// class Student {
//     name: string
//     constructor(n: string) {
//         this.name = n
// }
// class Person {
//     students: Student[]=[]
//     addStudent(obj.Student){
//         this.students.push(obj)
//     }
// }
// cosnt person = new Person()
// const programmStart = async (persons:Person) => {
//     do{
//         console.log("Welcome Guest");
//         const execute = await inquirer.prompt([
//             type: "list",
//             message: "What do you want to like talk to you?",
//             name: "select",
//             choice: ["khude se", "student"],
//         ]);
//         if (execute.select === "student") {
//             console.log("Welcome Student Khude se");
//             console.log("i am not well");
//     }
//     if (execute.select === "Student") {
//         const execute = await inquirer.prompt({
//             type: "input",
//             message: "appko kissy baat krni",
//             name: "student",
//         });
//         const student = persons.students.find((val) => val.name == execute.student);
//         if (!student) {
//             const name = new Student(execute.student)
//             persons.addStudent(name);
//             console.log(`Hello i am ${name}, or main thek hun`);
//             console.log(persons.students);
//         }
//     }
//     }
//     }while(true)
// }
//     programmStart(persons);
//     console.log("Welcome Guest");
//     const execute = await inquirer.prompt([
//         type: "list",
//         message: "What do you want to like talk to you?",
//         name: "select",
//         choice: ["khude se", "student"],
//     ]);
//     if (execute.select === "student") {
//         console.log("Welcome Student Khude se");
//         console.log("i am not well");
// }
// if (execute.select === "Student") {
//     const execute = await inquirer.prompt({
//         type: "input",
//         message: "appko kissy baat krni",
//         name: "student",
//     });
//     const student = persons.students.find((val) => val.name == execute.student);
//     if (!student) {
//         const name = new Student(execute.student)
//         persons.addStudent(name);
//         console.log(`Hello i am ${name}, or main thek hun`);
//         console.log(persons.students);
//     }
// }
// }
