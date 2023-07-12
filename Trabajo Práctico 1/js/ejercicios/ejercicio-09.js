// let frase = prompt("Escriba una frase para ver sus vocales.");
// let fraseSinEspacio = frase.match(/[aeiou]/gi).join("")

// document.write(fraseSinEspacio);


//Como esta tarea fue quitada del TP, intenté resolverla con ayuda de internet, donde encontré la solución y luego me puse a ver acerca de Regular Expresions y Flags.





//Tarea con lo aprendido con Arrays


let frase = prompt("Escriba una frase para ver sus vocales.");
let vocales = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
let vocalesFrase = [];
do {
    if (!frase) {
        alert("No ingresó una frase.");
        frase = prompt("Escriba una frase para ver sus vocales.");
    }
} while (!frase) {
    for (let index = 0; index < frase.length; index++) {
        if (vocales.includes(frase[index])) {
            vocalesFrase.push(frase[index]);
        }
    }
}
document.write(vocalesFrase.join(" | "));