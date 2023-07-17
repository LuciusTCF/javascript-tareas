let suma = 0;
let aceptar = ""

while (true) {
        let numero = parseFloat(prompt("Escriba un número para sumar."));
        if(isNaN(numero)){
                alert("El dato ingresado no es un número.");
        } else {
                suma += numero;
        }
        aceptar = confirm("¿Desea escribir otro número?");
        if(!aceptar){
                break;
        }
}
document.write(`La suma es igual a ${suma}`);