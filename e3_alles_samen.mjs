

import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const userInput = readline.createInterface({ input, output });


//E3: Alles samen//
//Maak een combinatie van de vorige twee challenges. //
//Schrijf code om een namenlijst op te vullen met namen van je medestudenten. Blijf dit herhalen totdat je 'S' ingeeft om te stoppen. //
//Eens je een lijst met namen hebt opgevuld nodig je deze personen uit om deel te nemen aan een superleuk vak.//


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
