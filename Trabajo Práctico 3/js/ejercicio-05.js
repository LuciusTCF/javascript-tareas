//Opción 1 - Coloqué manualmente las letras con y sin tilde.

const fraseFunction = (frase = prompt("Ingrese una frase para saber está compuesta por minúsculas y/o mayúsculas.")) => {
    let mayusculas = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z","Á","É","Í","Ó","Ú"];
    let minusculas = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z","á","é","í","ó","ú"];
    let mayusculaEncontrada = "";
    let minusculaEncontrada = "";
    for (let i = 0; i < frase.length; i++) {
        if (mayusculas.includes(frase[i])) {
            mayusculaEncontrada = true;
        }
        if (minusculas.includes(frase[i])) {
            minusculaEncontrada = true;
        }
    }
    do {
        if(!frase) {
            alert("No ha ingresado una frase válida");
            frase = prompt("Ingrese una frase para saber está compuesta por minúsculas y/o mayúsculas.");
        }
    } while (!frase) {
        if (mayusculaEncontrada && minusculaEncontrada) {
            return "La frase tiene mayúsculas y minúsculas.";
        }
        if (mayusculaEncontrada && !minusculaEncontrada) {
            return "La frase solo tiene mayúsculas.";
        }
        if (!mayusculaEncontrada && minusculaEncontrada) {
            return "La frase solo tiene minúsculas.";
        }
        if (!mayusculaEncontrada && !minusculaEncontrada) {
            return "La frase no tiene letras."
        }
    }
};

//Opción 2 - No se necesitan arrays para tener todas las letras, pero no se como impedir que los símbolos sean tomados como letras.

// const fraseFunction = (frase = prompt("Ingrese una frase para saber está compuesta por minúsculas y/o mayúsculas.")) => {
//     let mayuscula = false;
//     let minuscula = false;
//     for (let i = 0; i < frase.length; i++) {
//         if (frase[i] == frase[i].toUpperCase() && isNaN(frase[i])) {
//             mayuscula = true;
//         }
//         if (frase[i] == frase[i].toLowerCase() && isNaN(frase[i])) {
//             minuscula = true;
//         }
//     }
//     do {
//         if(!frase) {
//             alert("No ha ingresado una frase válida");
//             frase = prompt("Ingrese una frase para saber está compuesta por minúsculas y/o mayúsculas.");
//         }
//     } while (!frase) {
//         if (mayuscula == true && minuscula == true) {
//             return "La frase tiene mayúsculas y minúsculas.";
//         }
//         if (mayuscula == true && !minuscula == true) {
//             return "La frase solo tiene mayúsculas.";
//         }
//         if (!mayuscula == true && minuscula == true) {
//             return "La frase solo tiene minúsculas.";
//         }
//         if (!mayuscula == true && !minuscula == true) {
//             return "La frase no tiene letras."
//         }
//     }
// };

//Opción 3 - Usando regex se evita el problema de la opción 2, pero como no se usar aun regex no se toman en cuenta los caracteres con tilde como letras.


// const fraseFunction = (frase = prompt("Ingrese una frase para saber está compuesta por minúsculas y/o mayúsculas.")) => {
//     let mayuscula = false;
//     let minuscula = false;
//     for (let i = 0; i < frase.length; i++) {
//         if (frase[i] == frase[i].replace(/[^a-zA-Z 0-9]+/g).toUpperCase() && isNaN(frase[i])) {
//             mayuscula = true;
//         }
//         if (frase[i] == frase[i].replace(/[^a-zA-Z 0-9]+/g).toLowerCase() && isNaN(frase[i])) {
//             minuscula = true;
//         }
//     }
//     do {
//         if(!frase) {
//             alert("No ha ingresado una frase válida");
//             frase = prompt("Ingrese una frase para saber está compuesta por minúsculas y/o mayúsculas.");
//         }
//     } while (!frase) {
//         if (mayuscula == true && minuscula == true) {
//             return "La frase tiene mayúsculas y minúsculas.";
//         }
//         if (mayuscula == true && !minuscula == true) {
//             return "La frase solo tiene mayúsculas.";
//         }
//         if (!mayuscula == true && minuscula == true) {
//             return "La frase solo tiene minúsculas.";
//         }
//         if (!mayuscula == true && !minuscula == true) {
//             return "La frase no tiene letras."
//         }
//     }
// };