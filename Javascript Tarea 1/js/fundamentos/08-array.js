//Array (Arreglos)
let alumnos = ["Jimena", "Alberto", "Nicolás", "Paula", "Alejandra", "Pablo"];

// Mostrar un elemento del arreglo
console.log(alumnos[2]);

// Obtener la cantidad de elementos de un arreglo
console.log(alumnos.length);

//Mostrar el último elemento
console.log(alumnos.at(-1));
console.log(alumnos[alumnos.length-1]);

//Concatenar
let alumnosDestacados = ["Florinda", "Pedro", "Nacho", "Beatriz"];
let alumnosEnFalta = ["Josefina", "Diótrefes"];

let comision = alumnos.concat(alumnosDestacados,alumnosEnFalta);

//Iterar un arreglo
for (let index = 0; index < comision.length; index++) {
    console.log(`Hola ${comision[index].toUpperCase()}, ¿cómo estás?`);
    //accion
}

//Agregar un elemento al arreglo
comision.push("Roxana", "Roberto", "Fabrizio");
comision.unshift("Luciano");

//Eliminar los elementos
comision.pop(); //el último
comision.shift(); //el primero

//Obtener la posición de un elemento en el arreglo
console.log(comision.indexOf("roberto"));

//Saber si un elemento existe
console.log(comision.includes("Abigail"));

//Eliminar un elemento según la posición
comision.splice(6, 1);

//Agregar elemento desde una posición
comision.splice(5, 0, "Laura", "Magali");

//Reemplazar un elemento por su posición
comision.splice(7, 1, "Daniel", "Alfredo", "Chapulín");

//Concatenar un arreglo con un string
console.log(`Los alumnos destacados son: ${alumnosDestacados}`);

//Ordenar alfabéticamente
comision.sort();

//Ordenar al revés
comision.reverse();

//Extraer un nuevo arreglo de otro existente
let ausentes = comision.slice(9, 13);

//ENIGMA UNIVERSAL
console.log(["huevo", "gallina"].sort());

/*
Dado un array de números crear un programa que pida al usuario ingresar un número y verificar si existe en el arreglo. Si es así dar un mensaje como el siguiente "Adivinaste el número"
*/

let lista = [23, 56, 78, 120, 45, 1234];

let numero = Number(prompt("Ingrese un número"));

if (!isNaN(numero)) {
    if (lista.includes(numero)) {
        console.log("Adivinaste el número ");
    } else {
        console.error("No adivinaste el número");
    }
} else if (numero != null){
    console.warn("Debes ingresar un número");
}

//Ejercicio
//----------
// Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

// Mostrar la longitud del arreglo.
// Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
// Añade en última posición la ciudad de París.
// Escribe por pantalla el elemento que ocupa la segunda posición.
// Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

let ciudad = prompt("Ingrese una ciudad");
let ciudades = [];

//bucle
//while, do while, for
while (ciudad) {
    ciudades.push(ciudad);
    ciudad = prompt("Ingrese una ciudad");
}

console.log(`La cantidad de ciudades agregadas es ${ciudades.length}`);

// Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
// document.write(ciudades[0], ciudades[2], ciudades.at(-1));
document.write("<ul>");
document.write(`<li>${ciudades[0]}</li>`);
document.write(`<li>${ciudades[2]}</li>`);
document.write(`<li>${ciudades.at(-1)}</li>`);
document.write("<ul>");

// Añade en última posición la ciudad de París.
ciudades.push("París");

// Escribe por pantalla el elemento que ocupa la segunda posición.
document.write(`<p>${ciudades[1]}</p>`);

// Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
ciudades.splice(1, 1, "Barclona");
