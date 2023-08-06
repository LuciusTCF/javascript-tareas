let clicks = document.querySelector("#clicks");
let valor = 1
const contador = () => {
    clicks.innerText = `Número de veces que se presionó el botón: ${valor}`;
    valor ++;
};