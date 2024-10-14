import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


let prijzen = [50, 100, 200, 75, 120];

function geefKorting(prijs) {
    let korting = prijs * 0.15;
    let nieuwePrijs = prijs - korting;
    return nieuwePrijs;
}

for (let i = 0; i < prijzen.length; i++) {
    let oudePrijs = prijzen[i];
    let nieuwePrijs = geefKorting(oudePrijs);
    console.log(`Oude prijs: €${oudePrijs}, nieuwe prijs met korting: €${nieuwePrijs}`);
}




process.exit()

