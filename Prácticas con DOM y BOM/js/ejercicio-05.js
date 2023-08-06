let texto = document.querySelector("#input");
let listaDeTareas = [];

const agregar = (event) => {
  event.preventDefault()
  let tareaAgregada = `<li>${texto.value}</li>`
  listaDeTareas.push(tareaAgregada);
  document.querySelector("#tarea").innerHTML = listaDeTareas.join("");
  document.querySelector("form").reset();
  texto.focus();
};