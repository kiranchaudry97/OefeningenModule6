import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

//M1: Korting plz//
//Maak een array waar je enkele prijzen in gaat bijhouden. //
//schrijf vervolgens een functie om 15 procent korting te geven.//
 //Deze functie krijgt een prijs binnen en geeft als resultaat de nieuwe prijs met korting terug.//
  //Loop vervolgens over al je prijzen en pas de geefKorting functie toe op elke prijs.//




let prijzen = [10, 20, 30, 40, 120];

function geefKorting(prijs) {
    let korting = prijs * 0.15;
    let nieuwePrijs = prijs - korting;
    return nieuwePrijs;
}

for (let i = 0; i < prijzen.length; i++) {
    let oudePrijs = prijzen[i];
    let nieuwePrijs = geefKorting(oudePrijs);
    console.log(" Oude prijs: € " + oudePrijs + ", nieuwe prijs met korting: € " + nieuwePrijs);
}




process.exit()

