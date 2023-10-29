// PANAVERSE ATM PROJECT
import inquirer from "inquirer";

interface ansType {
  userId: string;
  userPin: number;
  accountType: string;
  transactionType: string;
  amount: number;
  amountWithdraw: number; // Define the amountWithdraw property
}


  const answers: ansType = await inquirer.prompt([
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

    const balance = Math.floor(Math.random() * 1000000000);
    console.log(balance)
    const enterAmount = answers.amount;
    if (balance >= enterAmount) {
      const remianing = balance - enterAmount;
      console.log("Remaining balance is", remianing)
    } else {
      console.log("Insuficient Balance")
    }
  }