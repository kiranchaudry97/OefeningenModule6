
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

//E4: Gemiddelde//
//Maak een array waar je een lijst van punten in gaat bijhouden. //
//Schrijf vervolgens code om de gemiddelde score te berekenen.//

let puntenlijst = [7.5, 8, 6, 9, 5.5, 10, 7, 8.5, 6.5];

let totaal = 0;
for (let punt of puntenlijst) {
  totaal += punt;
}

let gemiddelde = totaal / puntenlijst.length;

console.log("Het gemiddelde van de punten is:" + gemiddelde);


process.exit()
