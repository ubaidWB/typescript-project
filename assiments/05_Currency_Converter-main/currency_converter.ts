import inquirer from "inquirer";

let Convertions = {
    'PKR': {
        'USD': 0.0036,
        'GBP': 0.0029,
        'PKR': 1,
    },
    'GBP': {
        'USD': 1.22,
        'PKR': 339.19,
        'GBP': 1,
    },
    'USD': {
        'PKR': 278.46 ,
        'GBP': 0.82,
        'USD': 1,
    },

}
const answer: {
    from: 'PKR' | 'GBP' | 'USD',
    To: 'PKR' | 'GBP' | 'USD',
    Amount: number
} = await inquirer.prompt([
    {
        type: 'List',
        name: 'from',
        choices: ['PKR', 'USD', 'GBP'],
        message: 'Select Your Currency: '
    },
    {
        type: 'List',
        name: 'To',
        choices: ['PKR', 'USD', 'GBP'],
        message: 'Select Currency You love: '
    },
    {
        type: 'List',
        name: 'Amount',
        choices: ['PKR', 'USD', 'GBP'],
        message: 'Enter Your Amount...: '
    },

]);

const { from, To, Amount } = answer;
if (from && To && Amount) {
    let result = Convertions[from][To] * Amount
    console.log(`Your converstion from ${from} to ${To} is ${result}`);
} else {
    console.log('Please enter valid amount. that you have in account..');

}



