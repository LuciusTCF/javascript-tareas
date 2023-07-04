//Condicionales

/*

si tal condicion se cumple
entonces hacer algo
si no
no hacer nada o hacer otra cosa

*/

// if( condici0n ){

// //las acciones si la condicion se cumple

// }

let cajaChica = 200;

if (cajaChica > 0) {
    console.log(`Hay $${cajaChica} en la caja chica`);
} else {
    console.log(`No hay ni un peso`);
}

// let numerito = parseInt(prompt("Ingrese un número"))

// if (isNaN(numerito)) {
//     console.log("No ingresó un número");
//     numerito = parseInt(prompt("Ingrese un número"));
// } 

// isNaN(numerito); //true si no es un número

//Dado un número no diga si ese número es par o no

//dato de entrada: número del usuario
//proceso: dividir el número en 2 y evaluo el resto
//dato de salida: mensaje al usuario

let numeroUsuario = parseInt(prompt("Ingrese un número entero"));

if (isNaN(numeroUsuario)) {
    console.warn(`El valor ${numeroUsuario} no es un número`)
} else {
    // let resto = numeroUsuario % 2;
    if (numeroUsuario % 2 == 0) {
        console.log(`El número ${numeroUsuario} es par`);
    } else {
        console.log(`El número ${numeroUsuario} NO es par`);
    }
}

/*
1.- En una tienda de venta de rrespuestas automotrices se tiene que el descuento depende del monto de venta, así:
Se ingresa el monto de venta y el sistema debe calcular el descuento y restarlo del total segun reglas:
- Si el monto es menor que 500 no hay descuento *
- Si el monto está comprendido entre 500 y 1000 inclusive, el descuento es de 5%
- Si el monto está comprendido entre 1000 y 7000 inclusive, el descuento es de 11%
- Si el monto está comprendido entre 700 y 15000 inclusive, el descuento es del 18%
- Si el monto es mayor de 15000 el desc es del 25%.
Por ejemplo sis se ingresa un monto de 5000 el descuento será 550, y por tanto el valor a pagar será 4450.
*/

let monto = parseFloat(prompt('Ingrese el monto de la venta'));5
let montoDescuento = 0;
let montoConDescuento = 0;

// if (isNaN(monto)) {
//     console.warn('El valor ingresado no es válido');

// } else if (monto < 500) {

//     console.log('Este monto no tiene descuento');
// } else if(monto >= 500 && monto <= 1000) {
//     //accion
//     console.log('Este monto tiene un descuento del 5%');
//     montoDescuento = monto * 0.05;
//     montoConDescuento = monto - montoDescuento;
//     console.log(`El monto a pagar con el descuento incluido es de $${montoConDescuento}`);
// } else if(monto > 1000 && monto <= 7000) {
//     //accion
//     console.log('Este monto tiene un descuento del 11%');
//     montoDescuento = monto * 0.11;
//     montoConDescuento = monto - montoDescuento;2
//     console.log(`El monto a pagar con el descuento incluido es de $${montoConDescuento}`)
// } else if(monto > 7000 && monto <= 15000) {
//     //accion
//     console.log('Este monto tiene un descuento del 18%');
//     montoDescuento = monto * 0.18;
//     montoConDescuento = monto - montoDescuento;2
//     console.log(`El monto a pagar con el descuento incluido es de $${montoConDescuento}`)
// } else {
//         console.log('Este monto tiene un descuento del 25%');
//         montoDescuento = monto * 0.25;
//         montoConDescuento = monto - montoDescuento;2
//         console.log(`El monto a pagar con el descuento incluido es de $${montoConDescuento}`)
//     }

if (isNaN(monto)) {
    console.warn('El valor ingresado no es válido');

} else {
    if (monto < 500) {
        console.log('Este monto no tiene descuento');
    } else if(monto <= 1000) {
        console.log('Este monto tiene un descuento del 5%');        montoDescuento = monto * 0.05;
} else if(monto <= 7000) {
    console.log('Este monto tiene un descuento del 11%');
    montoDescuento = monto * 0.11;
} else if(monto <= 15000) {
    console.log('Este monto tiene un descuento del 18%');
    montoDescuento = monto * 0.18;
} else {
        console.log('Este monto tiene un descuento del 25%');
        montoDescuento = monto * 0.25;
    }
    montoConDescuento = monto - montoDescuento;
    console.log(`El monto a pagar con el descuento incluido es de $${montoConDescuento}`);
}

//fiesta
//--------
//Solo puede entrar un mayor de edad osea mayor de 18
// si no es mayor de edad entonces debe ir acompañado de un tutor

let edad = 15;
let tutor = true;

if (edad >= 18 || tutor) {
    console.log('Puede entrar a la fiesta');
} else {
    console.warn('No puede entrar a la fiesta, vaya a la casa')
}