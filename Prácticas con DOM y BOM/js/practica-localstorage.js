const valor = JSON.parse(localStorage.getItem("valor")) || [];

const guardar = () => {
  localStorage.removeItem("valor");
  let valorPrompt = prompt("Ingrese un valor par guardar");
  valor.push(valorPrompt);
  localStorage.setItem("valor", JSON.stringify(valor));
};
const recuperar = () => {
  document.querySelector("#tarea").innerHTML = valor.at(-1);
};
