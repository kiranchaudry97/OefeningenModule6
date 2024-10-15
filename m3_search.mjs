import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const userInput = readline.createInterface({ input, output });

let namenlijst = ["Amin", "Sofie", "Samantha", "Karel", "Mehdi", "Joris", "Nuria"];

function zoekNaam(namenlijst, naam) {
  let index = namenlijst.indexOf(naam);
  return index !== -1 ? index : -1;
}

const zoek = async () => {
  const naam = await userInput.question('type de naam in om te zoeken: ');

  const resultaat = zoekNaam(namenlijst, naam);
  if (resultaat === -1) {
    console.log(" De naam " + naam + " is niet gevonden.");
  } else {
    console.log(" De naam " + naam + " is gevonden op positie " + resultaat);
  }

  userInput.close();
};

zoek();