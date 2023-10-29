import inquirer from 'inquirer';

async function main() {
  const counter_words: {
    Sentence: string;
  } = await inquirer.prompt([
    {
      name: 'Sentence',
      type: 'input',
      message: 'Your Sentence/Words/Number Count is: ',
    },
  ]);

  const words = counter_words.Sentence.trim().split(' ');
  console.log(`Your Sentence/Words/Number count is ${words.length}`);
}

main();