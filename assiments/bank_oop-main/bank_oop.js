// import { faker } from "@faker-js/faker";
// import inquire from "inquirer";
// import chalk from "chalk";
class Customer {
    firstName;
    lastName;
    age;
    gender;
    mobileNumber;
    accountNumber;
    constructor(fname, lName, age, gender, mobileNumber, accountNumber) {
        this.firstName = fname;
        this.lastName = lName;
        this.age = age;
        this.gender = gender;
        this.mobileNumber = mobileNumber;
        this.accountNumber = accountNumber;
    }
}
class Bank {
    customers;
    bankAccounts;
    constructor() {
        this.customers = [];
        this.bankAccounts = [];
    }
    addCustomer(obj) {
        this.customers.push(obj);
    }
    addAccountNumber(obj) {
        this.bankAccounts.push(obj);
    }
    transaction(accountNumber, balance) {
        const index = this.bankAccounts.findIndex((acc) => acc.accountNumber === accountNumber);
        if (index !== -1) {
            this.bankAccounts[index].balance = balance;
        }
    }
}
const myBank = new Bank();
// Manually input customer data
const customerData = [
    {
        firstName: "John",
        lastName: "Doe",
        age: 30,
        gender: "male",
        mobileNumber: 1234567890,
        accountNumber: 1001,
    },
    {
        firstName: "Alice",
        lastName: "Smith",
        age: 25,
        gender: "female",
        mobileNumber: 9876543210,
        accountNumber: 1002,
    },
];
// Create customer objects and add them to the bank
customerData.forEach((data) => {
    const cus = new Customer(data.firstName, data.lastName, data.age, data.gender, data.mobileNumber, data.accountNumber);
    myBank.addCustomer(cus);
    myBank.addAccountNumber({ accountNumber: cus.accountNumber, balance: 100000 });
});
export {};
// Rest of your code remains the same
// ...
