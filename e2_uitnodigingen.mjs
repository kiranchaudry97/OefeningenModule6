import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});





let studententlijst = [
    'Aart', 'Bart', 'Carla', 'Dirk', 'Els', 'Frank', 'Gijs', 'Henk', 'Ingrid',
    'Jan', 'Kees', 'Laura', 'Mark', 'Nienke', 'Olaf', 'Pieter', 'Quirine', 'Rob', 'Sander'
  ];
  
  for (let student of studententlijst) {
    console.log(`${student}, je bent uitgenodigd om deel te nemen aan de leukste cursus van EhB!`);
  }
  


process.exit()