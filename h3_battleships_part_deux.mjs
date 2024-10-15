
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

// Als uitbreiding op je zeeslag schrijf je functies om boten op je speelveld te plaatsen. //
//Geef de functie een lengte van je boot mee (2 tot 5) en een richting (up, down, left of right). //
//Controleer of er genoeg plaats is om de boot te zetten en plaats in de array je boot met B.//


let speelveld = Array(10).fill(null).map(() => Array(10).fill('')); 

function plaatsBoot(lengte, x, y, richting) {
    if (lengte < 2 || lengte > 5) {
        console.log("Ongeldige bootlengte. Kies een lengte tussen 2 en 5.");
        return;
    }
    
    if (!kanBootGeplaatstWorden(lengte, x, y, richting)) {
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

function kanBootGeplaatstWorden(lengte, x, y, richting) {
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

function printSpeelveld() {
    for (let rij of speelveld) {
        console.log(rij.join(' '));
    }
}

plaatsBoot(3, 2, 3, 'right'); 
plaatsBoot(4, 5, 7, 'down'); 
plaatsBoot