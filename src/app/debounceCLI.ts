import { createInterface } from "readline";
import chalk from "chalk";
import { debounce } from "../app/debounce";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

let debounceRequestCLI: Function = debounce((value: string) => {
    console.log(`Con función debounce: ${chalk.green(value)}\n`);
  }, 1000);

let debounceMenu: Function = debounce(() => {
    displayMenu();
    chooseOption();
}, 1100);  

function inputText() {
    rl.question(chalk.cyan("Escribe lo que quieras: "), (text) => {
        let textWithoutEspaces = text.replaceAll(" ", "");
        if (textWithoutEspaces.length == 0) {
            console.log(chalk.redBright("Error: no se ha escrito nada"));
            displayMenu();
            chooseOption();

        } else {
            console.log(`\nSin función debounce: ${chalk.magenta(text)}`)
            debounceRequestCLI(text);
            debounceMenu();
        }
    });
};

function displayMenu() {
    console.log(chalk.yellow("\n-----DEMOSTRACIÓN FUNCIÓN DEBOUNCE-----"));
    console.log("1. Ejecutar demostración");
    console.log("2. Salir");
};

function chooseOption() {
    rl.question("Elige una opción: ", (choice) => {
        switch (choice) {
            case "1":
                inputText();
            break;

            case "2":
                rl.close();
            break;

            default:
                console.log(chalk.redBright("Error: opción introducida no válida. Por favor elija la opción 1 o 2"));
                displayMenu();
                chooseOption();
            break;
        };
    });
};

displayMenu();
chooseOption();