// import inquirer from "inquirer";
// interface ansType {
//   userId: string;
//   userPin: number;
//   accountType: string;
//   transactionType: string;
//   amount: number;
// }
// const answers: ansType = await inquirer.prompt([
//   {
//     type: "input",
//     name: "userId",
//     message: "Enter Your ID: ",
//   },
//   {
//     type: "number",
//     name: "userPin",
//     message: "Enter Your PIN Number ",
//   },
//   {
//     type: "list",
//     name: "accountType",
//     choices: ["Current", "Saving"],
//     message: "Select Your ACCOUNT TYPE: ",
//   },
//   {
//     type: "list",
//     name: "transactionType",
//     choices: ["FASTLY CASH", "WITHDRAW"],
//     message: "Please Select Your transaction",
//     when(answers) {
//       return answers.accountType;
//     },
//   },
//   {
//     type: "list",
//     name: "amount",
//     choices: [100, 300, 500, 1000, 2000, 5000, 500000],
//     message: "Please Enter Your AMOUNT",
//     when(answers) {
//       return answers.transactionType == "FASTLY CASH";
//     },
//   },
//   {
//     type: "number",
//     name: "amount",
//     message: "Please Enter Your AMOUNT",
//     when(answers) {
//       return answers.transactionType == "WITHDRAW";
//     },
//   },
// ]);
// if (answers.userId && answers.userPin) {
//     const balance = Math.floor(Math.random()*1000000);
//     console.log(balance);
//     const enterAmount = answers.amount;
//     if (balance < enterAmount) {
//         const remianing = balance - enterAmount;
//         console.log("Your remaning balance is ", remianing);
//     } else {
//         console.log("Insuficient Balance");
//     }
// }
import inquirer from "inquirer";
async function main() {
    const answers = await inquirer.prompt([
        {
            type: "input",
            name: "userId",
            message: "Enter Your ID: ",
        },
        {
            type: "number",
            name: "userPin",
            message: "Enter Your PIN Number ",
        },
        {
            type: "list",
            name: "accountType",
            choices: ["Current", "Saving"],
            message: "Select Your ACCOUNT TYPE: ",
        },
        {
            type: "list",
            name: "transactionType",
            choices: ["FASTLY CASH", "WITHDRAW"],
            message: "Please Select Your transaction",
            when(answers) {
                return answers.accountType;
            },
        },
        {
            type: "list",
            name: "amount",
            choices: [100, 300, 500, 1000, 2000, 5000, 500000],
            message: "Please Enter Your AMOUNT",
            when(answers) {
                return answers.transactionType === "FASTLY CASH";
            },
        },
        {
            type: "number",
            name: "amountWithdraw",
            message: "Please Enter Your AMOUNT",
            when(answers) {
                return answers.transactionType === "WITHDRAW";
            },
        },
    ]);
    if (answers.userId && answers.userPin) {
        const balance = Math.floor(Math.random() * 1000000);
        console.log("Your current balance is: ", balance);
        if (answers.transactionType === "FASTLY CASH") {
            const enterAmount = answers.amount;
            if (balance < enterAmount) {
                const remaining = balance - enterAmount;
                console.log("Your remaining balance is ", remaining);
            }
            else {
                console.log("Insufficient Balance");
            }
        }
        else if (answers.transactionType === "WITHDRAW") {
            const enterAmount = answers.amountWithdraw;
            if (balance < enterAmount) {
                console.log("Insufficient Balance");
            }
            else {
                const remaining = balance - enterAmount;
                console.log("Your remaining balance is ", remaining);
            }
        }
    }
}
main();
