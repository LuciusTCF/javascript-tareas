let boton=document.querySelector("#boton");
let horaTexto= document.querySelector("#horaTexto");
let intervalo = null;
let condicion = true;

const horaActual = () => { if (condicion) {
    let hora = "";
    intervalo = setInterval(() => {
        hora = new Date();
        let horas = "";
        let minutos = "";
        let segundos = "";
        if (hora.getHours() < 10) {
            horas = "0";
        }
        if (hora.getMinutes() < 10) {
            minutos = "0";
        }
        if (hora.getSeconds() < 10) {
            segundos = "0";
        }
        horaTexto.innerText = `${horas}${hora.getHours()}:${minutos}${hora.getMinutes()}:${segundos}${hora.getSeconds()}`;
    }, 1000);
    condicion = false;
    boton.innerText="Detener el reloj";
} else{
    clearInterval(intervalo);
    condicion = true;
    boton.innerText="Reiniciar el reloj";
}};