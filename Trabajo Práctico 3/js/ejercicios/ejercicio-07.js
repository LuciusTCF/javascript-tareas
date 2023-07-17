const tablaDeMultiplicar = (numero = parseInt(prompt("Ingrese el valor de la tabla a calcular"))) => {
  do {
    if (isNaN(numero)) {
      alert("Debe ingresar un número");
      numero = parseInt(prompt("Ingrese el valor de la tabla a calcular"));
    }
  } while (isNaN(numero)) {
    return `Tabla del ${numero}<br><hr>${numero} x 1 = ${numero * 1}<br><hr>${numero} x 2 = ${numero * 2}<br><hr>${numero} x 3 = ${numero * 3}<br><hr>${numero} x 4 = ${numero * 4}<br><hr>${numero} x 5 = ${numero * 5}<br><hr>${numero} x 6 = ${numero * 6}<br><hr>${numero} x 7 = ${numero * 7}<br><hr>${numero} x 8 = ${numero * 8}<br><hr>${numero} x 9 = ${numero * 9}<br><hr>${numero} x 10 = ${numero * 10}<br><hr>`;
  }
};