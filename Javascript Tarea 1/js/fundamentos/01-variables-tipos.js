// alert("Bienvenidos a javascript desde un archivo js")

//Variables: declaración e inicialización

var alumnoPreferido = "Luciano"; //ya no se usa

let mentor = "Ariel"; //declarar variables comunes

const COMISION_ACTIVA = "62i"; //declarar variables constantes que no deberían cambiar

const PI = 3.1416;

//Nombrar variables
//SNAKE_CASE -> Constantes
//camelCase -> Variables comunes
//PascalCase -> Componentes
let MejorAlumnaDeLaMañana = "";
// let $comida='hamburguesa';
// let contar10=34;
// let 10contar error nuúmero al principio no permitido

// -----------------------
// 1° Caracteres aceptados
//--------------------------
// letras del alfabeto en ingles mayúsculas como minúsculas
// números del 0 al 9
// signos '$' y '_'

// 2° no podemos iniciar con un número

// 3° no se pueden usar palabras reservadas

//tipos de datos

// Number
let numeroPositivo = 34;
let numeroNegativo = -500;
let numeroDecimal = 56.89;

//String
let academia = "RollingCode";
let numeroString = "22";
let stringVacio = "";

//Bolean
let comprar = true;
let comerEnCasa = false;

//Undefined
let cosita;

//Null (vacio)
let billeteraDePablo = null;

//NaN (Not a Number)
console.log("La suma de un número con un undefined es", numeroPositivo + cosita);

// console.log('Hola mundo');

//Arreglos o Arrays
let alumnos = ["Jimena", "Luciano", "Pablo"];
let numeros = [23, 56, 789, 1000];
let cualquierCosa = ["Juan", 456, ["Perro", "Gato", "Pato"]];

//Objetos
let persona = {
  nombre: "Agustina",
  apellido: "Gonzalez",
  edad: 23,
};
