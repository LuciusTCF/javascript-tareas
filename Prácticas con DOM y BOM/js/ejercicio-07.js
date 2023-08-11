// let texto = document.querySelector("#input");
// let listaDeTareas = [];

// const agregar = (event, index) => {
//   event.preventDefault();
//   let tareaAgregada = `<li>${texto.value}</li>
//   <button class="btn btn-danger btn-sm" onclick="borrarAlumno(${index})">Eliminar</button>`;
//   listaDeTareas.push(tareaAgregada);
//   localStorage.setItem("listaDeTareas", JSON.stringify(listaDeTareas));
//   document.querySelector("#tarea").innerHTML = listaDeTareas.join("");
//   document.querySelector("form").reset();
//   texto.focus();
// };

// const eliminarTarea = (index) => {
//   let confirmar = confirm(
//     `¿Está seguro que quiere eliminar a ${listaDeTareas[index]}?`
//   );
//   if (confirmar) {
//     listaDeTareas.splice(index, 1);
//     localStorage.setItem("listaDeTareas", JSON.stringify(listaDeTareas));
//     alert("El registro fue eliminado");
//     cargarTabla();
//   }
// };

let texto = document.querySelector("#input");
let listaDeTareas = [];

const agregar = (event) => {
  event.preventDefault();
  let tareaAgregada = `<li>${texto.value}</li>`;
  listaDeTareas.push(tareaAgregada);
  document.querySelector("#tarea").innerHTML = listaDeTareas.join("");
  document.querySelector("form").reset();
  texto.focus();
};
