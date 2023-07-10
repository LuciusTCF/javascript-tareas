let texto = prompt("Ingrese un texto.");
let totalTextos = "";
let aceptar = ""

while (true) {
    totalTextos = totalTextos + texto + " - " 
    aceptar = confirm("¿Desea ingresar otro texto?");
    if(aceptar){
        texto = prompt("Ingrese otro texto.");
    } else {
        break;
    }
}

document.write(totalTextos);