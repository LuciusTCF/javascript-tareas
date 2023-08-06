let parrafo = document.querySelector("#parrafo");
let intervalo = "";
const cambiarColor = () => {
    intervalo = setInterval(() => {
    let colorRandom1 = Math.floor(Math.random() * 256);
    let colorRandom2 = Math.floor(Math.random() * 256);
    let colorRandom3 = Math.floor(Math.random() * 256);
    let colorParrafo1 = 0
    let colorParrafo2 = 0
    let colorParrafo3 = 0
    if (colorRandom1 < 128) {
        colorParrafo1 = 255
    } else {
        colorParrafo1 = 0
    }
    if (colorRandom2 < 128) {
        colorParrafo2 = 255
    } else {
        colorParrafo2 = 0
    }
    if (colorRandom3 < 128) {
        colorParrafo3 = 255
    } else {
        colorParrafo3 = 0
    }
    parrafo.style.backgroundColor = `rgb(${colorRandom1}, ${colorRandom2}, ${colorRandom3})`;
    parrafo.style.color = `rgb(${colorParrafo1}, ${colorParrafo2}, ${colorParrafo3})`;
},250);
}
const colorOriginal = () => {
    clearInterval(intervalo);
    parrafo.style.backgroundColor = "rgb(35, 35, 35)";
    parrafo.style.color = "white";
}