import inquirer from "inquirer";

class Student {
    name: string;
    constructor(n: string) {
        this.name = n;
    }
}

class Person {
    students: Student[] = [];

    addStudent(student: Student) {
        this.students.push(student);
    }
}

const person = new Person();

const programStart = async (persons: Person) => {
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


