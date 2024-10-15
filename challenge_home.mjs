import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


// 3 Battleships 3 furious
//Schrijf een uitbreiding in je functie om te schieten in zeeslag. Binnen deze functie controleer je of je een boot geraakt hebt. 
//indien ja zet je op die plaats in je array een *, anders zet je een ^. 
//Indien je dit verder wil uitbreiden kan je twee arrays bijhouden en om beurten schieten tot je een boot gezonken hebt.

let speelveld1 = Array(10).fill(null).map(() => Array(10).fill('')); 
let speelveld2 = Array(10).fill(null).map(() => Array(10).fill('~'));

function plaatsBoot(speelveld, lengte, x, y, richting) {
    if (lengte < 2 || lengte > 5) {
        console.log("Ongeldige bootlengte. Kies een lengte tussen 2 en 5.");
        return;
    }
    
    if (!kanBootGeplaatstWorden(speelveld, lengte, x, y, richting)) {
        console.log("Niet genoeg plaats om de boot te plaatsen.");
        return;
    }
    
    if (richting === 'right') {
        for (let i = 0; i < lengte; i++) {
            speelveld[y][x + i] = 'B';
        }
    } else if (richting === 'left') {
        for (let i = 0; i < lengte; i++) {
            speelveld[y][x - i] = 'B';
        }
    } else if (richting === 'down') {
        for (let i = 0; i < lengte; i++) {
            speelveld[y + i][x] = 'B';
        }
    } else if (richting === 'up') {
        for (let i = 0; i < lengte; i++) {
            speelveld[y - i][x] = 'B';
        }
    } else {
        console.log("Ongeldige richting. Kies uit: up, down, left, right.");
    }
}

function kanBootGeplaatstWorden(speelveld, lengte, x, y, richting) {
    if (richting === 'right') {
        if (x + lengte > 10) return false;
        for (let i = 0; i < lengte; i++) {
            if (speelveld[y][x + i] === 'B') return false;
        }
    } else if (richting === 'left') {
        if (x - lengte < 0) return false;
        for (let i = 0; i < lengte; i++) {
            if (speelveld[y][x - i] === 'B') return false;
        }
    } else if (richting === 'down') {
        if (y + lengte > 10) return false;
        for (let i = 0; i < lengte; i++) {
            if (speelveld[y + i][x] === 'B') return false;
        }
    } else if (richting === 'up') {
        if (y - lengte < 0) return false;
        for (let i = 0; i < lengte; i++) {
            if (speelveld[y - i][x] === 'B') return false;
        }
    }
    return true;
}

function schiet(speelveld, x, y) {
    if (x < 0 || x >= 10 || y < 0 || y >= 10) {
        console.log("Ongeldige coördinaten.");
        return;
    }

    if (speelveld[y][x] === 'B') {
        speelveld[y][x] = '*'; 
        console.log("Raak! Je hebt een boot geraakt.");
    } else if (speelveld[y][x] === '~') {
        speelveld[y][x] = '^'; 
        console.log("Mis! Geen boot geraakt.");
    } else {
        console.log("Je hebt hier al geschoten!");
    }
}

function printSpeelveld(speelveld) {
    for (let rij of speelveld) {
        console.log(rij.join(' '));
    }
}

plaatsBoot(speelveld1, 3, 2, 3, 'right'); 
plaatsBoot(speelveld2, 4, 5, 7, 'down');  

let beurtSpeler1 = true; 

function speelRonde(x, y) {
    if (beurtSpeler1) {
        console.log("Speler 1 schiet:");
        schiet(speelveld2, x, y); 
        printSpeelveld(speelveld2);
    } else {
        console.log("Speler 2 schiet:");
        schiet(speelveld1, x, y); 
        printSpeelveld(speelveld1);
    }
    beurtSpeler1 = !beurtSpeler1; 
}

speelRonde(2, 3); 
speelRonde(5, 7); 
speelRonde(3, 3); 
speelRonde(6, 7); 

process.exit();
