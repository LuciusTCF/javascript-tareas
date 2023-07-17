const numero = (paridad = Number(prompt("Ingrese un número para saber si es par"))) => {
    do {
        if (isNaN(paridad) || paridad % 1 != 0) {
            alert("El dato ingresado no es un número.");
            paridad = Number(prompt("Ingrese un número para saber si es par"));
        }
    } while (isNaN(paridad) || paridad % 1 != 0) {
        if (paridad % 2 == 0) {
            return `El número ${paridad} es par`;
        } 
        if (paridad % 2 != 0) {
            return `El número ${paridad} es impar`;
        }
    }
};