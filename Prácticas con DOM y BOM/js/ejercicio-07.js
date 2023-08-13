const listaDeTareas = JSON.parse(localStorage.getItem("listaDeTareas")) || [];
let texto = document.querySelector("#input");

const agregar = (event) => {
  event.preventDefault();
  const tareaAgregada = texto.value;
  listaDeTareas.push(tareaAgregada);
  localStorage.setItem("listaDeTareas", JSON.stringify(listaDeTareas));
  document.querySelector("form").reset();
  cargarTabla();
  texto.focus();
};

let cuerpoTabla = document.querySelector("#tarea");

const cargarTabla = () => {
  cuerpoTabla.innerHTML = "";
  listaDeTareas.map((valor, index) => {
    let lista = document.createElement("li");
    let elemento = `${valor}
    <button class="btn btn-danger btn-sm" onclick="eliminar(${index})">Eliminar</button>
     <hr>`;
    lista.innerHTML = elemento;
    cuerpoTabla.append(lista);
  });
};

const eliminar = (index) => {
  let confirmar = confirm(
    `¿Está seguro que quiere eliminar a "${listaDeTareas[index]}"?`
  );
  if (confirmar) {
    listaDeTareas.splice(index, 1);
    localStorage.setItem("listaDeTareas", JSON.stringify(listaDeTareas));
    alert("El registro fue eliminado");
    cargarTabla();
  }
};

cargarTabla();
