import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const userInput = readline.createInterface({ input, output });

//We gaan starten met een basis om zeeslag te kunnen spelen.//
 //Maak gebruik van een multidimensional array die je speelveld voorstelt. //
// Deze array stelt 10 rijen en kolommen voor voor je speelveld. //
// Schrijf een functie waar je twee cooordinaten aan meegeeft. //
// x stelt voor waar je in de breedte op schiet, y stelt voor waar je in de hoogte op schiet.//
 //Op die plaats zet je in de array een *.//

let speelveld = Array(10).fill(null).map(() => Array(10).fill('')); 

function schiet(x, y) {
    if (x >= 0 && x < 10 && y >= 0 && y < 10) {
        speelveld[y][x] = ''; 
    } else {
        console.log("Ongeldige coördinaten. Kies een waarde tussen 0 en 9.");
    }
}

function printSpeelveld() {
    for (let rij of speelveld) {
        console.log(rij.join(' '));
    }
}

schiet(2, 3);
schiet(5, 7); 

printSpeelveld();



 process.exit();