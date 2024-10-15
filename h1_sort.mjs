
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


//H1: Sort//
//Maak een array met 10 gehele getallen. //
//schrijf code om deze getallen te sorteren van groot naar klein.//


let getallen = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

function sorteren(getallen) {
    return getallen.sort((a, b) => b - a); 
}

let gesorteerdeGetallen = sorteren(getallen);

console.log("De getallen van groot naar klein zijn: " + gesorteerdeGetallen.join(', '));

process.exit();