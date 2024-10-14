

import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const userInput = readline.createInterface({ input, output });

async function main() {
  let studententlijst = [
    'Aart', 'Bart', 'Carla', 'Dirk', 'Els', 'Frank', 'Gijs', 'Henk', 'Ingrid',
    'Jan', 'Kees', 'Laura', 'Mark', 'Nienke', 'Olaf', 'Pieter', 'Quirine', 'Rob', 'Sander'
  ];
  
  let naam;

  console.log('Lijst met bestaande studenten:');
  for (let student of studententlijst) {
    console.log(student);
  }
  
  while (true) {
    naam = await userInput.question('Geef de naam van een student : ');

    if (naam.toUpperCase() === 'S') {
      break; 
    }

    studententlijst.push(naam);
  }

  console.log('\nDe studenten die worden uitgenodigd:');
  
  for (let student of studententlijst) {
    console.log(`${student}, je bent uitgenodigd om deel te nemen aan de leukste cursus van EhB!`);
  }

  userInput.close();
}

main();
