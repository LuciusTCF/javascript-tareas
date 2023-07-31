// BOM
// Location
location.assign("https://rollingcodeschool.com");

location.replace("https://rollingcodeschool.com");

location.reload() //recarga la página

location.href = "https://google.com"

//navigator
if (navigator.onLine) {
    console.log("Estás conectado");
} else {
    console.log("No tenés internet");
}

if (navigator.deviceMemory < 4) {
    console.warn("Memoria insuficiente");
}

//history
let cantidadPaginas = 0;
if (cantidadPaginas < history.length) {
    history.go(1);
    cantidadPaginas++
}

// time

// setInreval 1000 milisegundos => 1 segundo
// Ejecuta la accion cada cierto tiempo

// setTimeout 1000 milisegundos => 1 segundo
// Ejecuta por única vez la acción después de cierto tiempo

let intervalo = null;

const fechaActual = () => {
    let fecha = "";
    intervalo = setInterval(() => {
       fecha = new Date();
       document.body.innerText = "";
       document.write(`<h3>${fecha}</h3>`);
    }, 1000);
};

const detener = () => clearInterval(intervalo);

const redirigir = () => {
    document.write("<h3>Redireccionando a la página principal...</h3>");
    setTimeout(() => {
        location.replace("https://rollingcodeschool.com");
    }, 3000);
};