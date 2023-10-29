
import faker from "@faker-js/faker";
import inquirer from "inquirer";
import chalk from "chalk";

class Customer {
    firstName: string;
    lastName: string;
    age: number;
    gender: string;
    mobileNumber: number;
    accountNumber: number;

    constructor(
        fname: string,
        lName: string,
        age: number,
        gender: string,
        mobileNumber: number,
        accountNumber: number
    ) {
        this.firstName = fname;
        this.lastName = lName;
        this.age = age;
        this.gender = gender;
        this.mobileNumber = mobileNumber;
        this.accountNumber = accountNumber;
    }
}

interface BankAccount {
    accountNumber: number;
    balance: number;
}

class Bank {
    customers: Customer[];
    bankAccounts: BankAccount[];

    constructor() {
        this.customers = [];
        this.bankAccounts = [];
    }

    addCustomer(obj: Customer) {
        this.customers.push(obj);
    }

    addAccountNumber(obj: BankAccount) {
        this.bankAccounts.push(obj);
    }

    transaction(accountNumber: number, balance: number) {
        const index = this.bankAccounts.findIndex((acc) => acc.accountNumber === accountNumber);
        if (index !== -1) {
            this.bankAccounts[index].balance = balance;
        }
    }
}

const myBank = new Bank();
// create customer
for (let i: number = 1; i <= 2; i++) {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const mobileNumber = parseInt(faker.phone.phoneNumberFormat(0));
    const cus = new Customer(firstName, lastName, 25 * i, "male", mobileNumber, 1000 + i);
    myBank.addCustomer(cus);
    myBank.addAccountNumber({ accountNumber: cus.accountNumber, balance: 100000 * i });
}
// property 'name' does not exeit on typeof import
async function BankService(bank: Bank) {
    do {
        const service = await inquirer.prompt({
            type: 'list',
            name: 'select',
            message: 'Select the option',
            choices: ['view balance', 'Withdraw', 'Deposit', 'exit']
        });

        // View balance
        if (service.select === 'view balance') {
            const response = await inquirer.prompt({
                type: 'input',
                name: 'num',
                message: 'Enter the account number'
            });

            const account = bank.bankAccounts.find((acc) => acc.accountNumber === parseInt(response.num));

            if (!account) {
                console.log(chalk.red.italic("Invalid Account Number"));
            }

            if (account) {
                const ans = await inquirer.prompt({
                    type: 'number',
                    message: 'Enter the amount to deposit',
                    name: 'Rs'
                });

                if (ans.Rs > account.balance) {
                    console.log(chalk.red.bold("Insufficient Balance"));
                }

                const newBalance = account.balance + ans.Rs;
                bank.transaction(account.accountNumber, newBalance);
                console.log(newBalance);
            }

            if (account) {
                const customer = myBank.customers.find((item) => item.accountNumber === account.accountNumber);

                if (customer) {
                    console.log(`Hello ${chalk.green.italic(customer.firstName)} ${chalk.green.italic(customer.lastName)} Your account balance is ${chalk.bold.blueBright(`$${account.balance}`)}`);
                }
            }
        }

        // Withdraw
        if (service.select === 'Withdraw') {
            const response = await inquirer.prompt({
                type: 'input',
                name: 'num',
                message: 'Enter the account number'
            });

            const account = bank.bankAccounts.find((acc) => acc.accountNumber === parseInt(response.num));

            if (!account) {
                console.log(chalk.red.italic("Invalid Account Number"));
            }

            if (account) {
                const ans = await inquirer.prompt({
                    type: 'number',
                    message: 'Enter the amount to withdraw',
                    name: 'Rs'
                });

                if (ans.Rs > account.balance) {
                    console.log(chalk.red.bold("Insufficient Balance"));
                }

                const newBalance = account.balance - ans.Rs;
                bank.transaction(account.accountNumber, newBalance);
                console.log(newBalance);
            }

            if (account) {
                const customer = myBank.customers.find((item) => item.accountNumber === account.accountNumber);

                if (customer) {
                    console.log(`Hello ${chalk.green.italic(customer.firstName)} ${chalk.green.italic(customer.lastName)} Your account balance is ${chalk.bold.blueBright(`$${account.balance}`)}`);
                }
            }
        }

        // Deposit
        if (service.select === 'Deposit') {
            const response = await inquirer.prompt({
                type: 'input',
                name: 'num',
                message: 'Enter the account number'
            });

            const account = bank.bankAccounts.find((acc) => acc.accountNumber === parseInt(response.num));

            if (!account) {
                console.log(chalk.red.italic("Invalid Account Number"));
            }

            if (account) {
                const ans = await inquirer.prompt({
                    type: 'number',
                    message: 'Enter the amount to deposit',
                    name: 'Rs'
                });

                const newBalance = account.balance + ans.Rs;
                bank.transaction(account.accountNumber, newBalance);
                console.log(newBalance);
            }

            if (account) {
                const customer = myBank.customers.find((item) => item.accountNumber === account.accountNumber);

                if (customer) {
                    console.log(`Hello ${chalk.green.italic(customer.firstName)} ${chalk.green.italic(customer.lastName)} Your account balance is ${chalk.bold.blueBright(`$${account.balance}`)}`);
                }
            }
        }

        if (service.select === 'exit') {
            return;
        }
    } while (true);
}

BankService(myBank);
