//String
let nombre = "José";
let apellido = "FERNANDEZ";
let frase = "              Bienvenidos a la clase           ";

//concatenación
console.log(nombre + " " + apellido);
console.log(nombre, apellido);

//Template String
console.log(`Mi nombre es ${nombre} ${apellido}`);

//métodos propiedades
console.log(nombre.toUpperCase());
console.log(apellido.toLowerCase());
console.log("El apellido tiene " + apellido.length + " Caracteres");

//eliminar los espacios delante y detrás de un string
let fraseSinEspacio = frase.trim();
// console.log(frase.trim().length);

//si quiero quitar los espacios en blanco del medio
let sinEspacio = fraseSinEspacio.split(" ");
console.log(sinEspacio.join(""));
// console.log(fraseSinEspacio.split(" ").join(""));

//obtener una o varias letras
console.log(apellido.at(0));
console.log(apellido.at(-1));

console.log(apellido.substring(2, 6));

// Tarea 1
// ------------
// 1 - ingreso el apellido
let apellidoTarea = "CHOCOBAR";
console.log(apellidoTarea);
// 2 - calcular cantidad de caracteres
console.log(apellidoTarea.length);
// 3 - obtener la última letra del apellido
console.log(apellidoTarea.at(-1));

// Tarea 2
// ------------
// Dada la siguiente palabra "marmota"
let palabraTarea = "marmota";
// 1 - Pasarla a mayuscula
console.log(palabraTarea.toUpperCase());
// 2 - Capitalizar la palabra (Marmota)
console.log(palabraTarea.at(0).toUpperCase() + palabraTarea.slice(1));
// console.log(palabraTarea.at(0).toUpperCase() + palabraTarea.substring(1));