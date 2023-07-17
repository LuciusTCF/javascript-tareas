const numero = function (paridad = Number(prompt("Ingrese un número para saber si es par"))) {
    do {
        if (isNaN(paridad)) {
            alert("El dato ingresado no es un número.");
            paridad = Number(prompt("Ingrese un número para saber si es par"));
        }
    } while (isNaN(paridad)) {
        if (paridad % 2 == 0) {
            return `El número ${paridad} es par`;
        } 
        if (paridad % 2 != 0) {
            return `El número ${paridad} es impar`;
        }
    }
};


//cuando intento que el botón del archivo HTML active un document.write en vez de un alert, el CSS de la página deja de funcionar.