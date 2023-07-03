let numeroParidad = parseInt(prompt("Escriba un número entero para saber si es par o impar"));

if (isNaN(numeroParidad)) {
    
    alert("No ha ingresado un número");
    
    numeroParidad = parseInt(prompt("Escriba un número entero para saber si es par o impar"));
    
} else {
    if (numeroParidad % 2 == 0) {
        document.write(`El número ${numeroParidad} es par`);
    } else {
        document.write(`El número ${numeroParidad} NO es par`);
    }
}




//Método con do while
/*
do
if (isNaN(numeroParidad)) {
    
    alert("No ha ingresado un número");
    
    numeroParidad = parseInt(prompt("Escriba un número entero para saber si es par o impar"));
    
} else {
    if (numeroParidad % 2 == 0) {
        document.write(`El número ${numeroParidad} es par`);
    } else {
        document.write(`El número ${numeroParidad} NO es par`);
    }
}
while (isNaN(numeroParidad)) {
    if (numeroParidad % 2 == 0) {
        document.write(`El número ${numeroParidad} es par`);
    } else {
        document.write(`El número ${numeroParidad} NO es par`);
    }
}
*/