import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


//E2: Uitnodigingen//
//Start met een array waar je namen van//
// je medestudenten gaat bijhouden. Loop over de volledige lijst en//
 // print voor elke naam af dat de persoon is uitgenodigd om deel te nemen aan //
  //de leukste cursus van EhB. Je moet niet per se programming essentials opgeven, we kunnen daar tegen.//




let studententlijst = [
    'Aart', 'Bart', 'Carla', 'Dirk', 'Els', 'Frank', 'Gijs', 'Henk', 'Ingrid',
    'Jan', 'Kees', 'Laura', 'Mark', 'Nienke', 'Olaf', 'Pieter', 'Quirine', 'Rob', 'Sander'
  ];
  
  for (let student of studententlijst) {
    console.log(`${student}, je bent uitgenodigd om deel te nemen aan de leukste cursus van EhB!`);
  }
  


process.exit()