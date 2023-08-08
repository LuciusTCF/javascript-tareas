let parrafo1 = document.getElementById("parrafo1");
let parrafo2 = document.querySelector("#parrafo2");

parrafo1.innerText =
  "Hola chicos y chicas, es un gusto presentarme...soy un párrafo";

//innerText => p, span, h1, h2
//innerHTML => Escribir código HTML dentro de un Nodo padre

parrafo1.style.color = "red";

parrafo1.classList = "text-uppercase fw-bold";

//querySelector
document.querySelector(".text-uppercase");
document.querySelector("p");

//Quitar contenido
// parrafo2.innerText = "";

let padre = document.querySelector("#nodoPadre");
padre.removeChild(parrafo2);
// padre.innerHTML = null;

// Imgen------------------------------------
let imagen1 = "https://miro.medium.com/v2/0*ZjYSm_q36J4KChdn";
let imagen2 =
  "https://i.kym-cdn.com/photos/images/newsfeed/001/435/941/317.gif";

//crear Elemento
let img = document.createElement("img"); //<img src="" alt="">
img.src = imagen1;
img.alt = "This is Fine";

let hipervinculo = document.createElement("a");
hipervinculo.href = "https://google.com";
hipervinculo.target = "_blank";

let contenedor = document.querySelector(".box");

contenedor.appendChild(img);

// let imagenesFeed = [
//     {imagen:"", descripcion:""}, {imagen:"", descripcion:""}, {imagen:"", descripcion:""},
// ];

// imagenesFeed.forEach((item) => {
//     let img = document.createElement("img");
//     img.src = item.imagen;
//     img.alt = item.descripcion;
// });

//Botones----------------------------------------
const mostrarAlerta = () => {
  alert("Presionaste botón 1");
};

const cambiarImagen = () => {
  if (img.src == imagen1) {
    img.src = imagen2;
    document.querySelector(".btn-danger").innerText = "Detener animación";
  } else {
    img.src = imagen1;
    document.querySelector(".btn-danger").innerText = "Animar imagen";
  }
};

// let imagenes = ["https://", "https://"];

// imagenes.length //=> cantidad de elementos

// const cambiarImagenes = () => {
//     if(index < imagenes.length) {
//         img.src = imagenes[index];
//         index++
//     }
// };

let btn3 = document.querySelector("#boton3");

const cambiarEstiloBoton = () => {
  if (btn3.classList == "btn btn-warning") {
    btn3.classList = "btn btn-dark";
  } else {
    btn3.classList = "btn btn-warning";
  }
};

//Formularios
class Alumno {
  constructor(nombre, correo, comision, mensaje) {
    this.nombre = nombre;
    this.correo = correo;
    this.comision = comision;
    this.mensaje = mensaje;
  }
}

//Si hay algo en localStorage que lo guarde o arreglo vacio
const alumnos = JSON.parse(localStorage.getItem("alumnos")) || [];
// localStorage.removeItem("alumnos"); //borras la clave alumnos
// localStorage.clear(); //borras todo

let nombre = document.querySelector("#input1");
let correo = document.querySelector("#input2");
let comision = document.querySelector("#input3");
let mensaje = document.querySelector("#input4");

const guardarDatos = (event) => {
  event.preventDefault();
  const alumno = new Alumno(
    nombre.value,
    correo.value,
    comision.value,
    mensaje.value
  );
  alumnos.push(alumno);
  //Guardar en localStorage
  localStorage.setItem("alumnos", JSON.stringify(alumnos));
  document.querySelector("form").reset();
  nombre.focus();
  cargarTabla();
};

//Tabla
let cuerpoTabla = document.querySelector("tbody"); //contenedor de los datos de la tabla
const myModal = new bootstrap.Modal(document.getElementById("updateModal"));

const cargarTabla = () => {
  cuerpoTabla.innerHTML = "";
  //recorrer el arreglo de alumnos
  //por cada alumnos
  //crear una fila
  //crear celdas con los datos del usuario
  //agregar esos datos al contenedor
  alumnos.map((alumno, index) => {
    let fila = document.createElement("tr");
    let celdas = `<td>${alumno.nombre}</td>
        <td>${alumno.correo}</td>
        <td>${alumno.comision}</td>
        <td>
        <button class="btn btn-danger btn-sm" onclick="borrarAlumno(${index})">X</button>
        <button class="btn btn-warning btn-sm" onclick="mostrarModal(${index})">M</button>
        </td>`;
    fila.innerHTML = celdas;
    cuerpoTabla.append(fila);
  });
};

const borrarAlumno = (index) => {
  let validar = confirm(
    `¿Está seguro que quiere eliminar a ${alumnos[index].nombre}?`
  );
  if (validar) {
    alumnos.splice(index, 1);
    localStorage.setItem("alumnos", JSON.stringify(alumnos));
    alert("El registro fue eliminado");
    cargarTabla();
  }
};

const mostrarModal = (index) => {
  document.querySelector("#inputModal1").value = alumnos[index].nombre;
  document.querySelector("#inputModal2").value = alumnos[index].correo;
  document.querySelector("#inputModal3").value = alumnos[index].comision;
  document.querySelector("#inputModal4").value = alumnos[index].mensaje;
  myModal.show();
};

cargarTabla();

//CRUD:
//CREATE*
//READ*
//UPDATE
//DELETE*
