let nota = parseInt(prompt("Coloque la nota a corregir a continuación:"));
let valor = 1

while (valor > 0) {
    switch (true) {
        case isNaN(nota):
            alert("Introduce un número válido");
            nota = parseInt(prompt("Coloque la nota a corregir a continuación:"));
            break;
        case nota < 0:
            alert("Número erróneo");
            nota = parseInt(prompt("Coloque la nota a corregir a continuación:"));
            break;
        case nota > 10:
            alert("Número erróneo");
            nota = parseInt(prompt("Coloque la nota a corregir a continuación:"));
            break;
        case nota <= 2:
            alert("Muy deficiente");
            valor--;
            break;
        case nota <= 4:
            alert("Insuficiente");
            valor--;
            break;
        case nota <= 6:
            alert("Suficiente");
            valor--;
            break;
        case nota == 7:
            alert("Bien");
            valor--;
            break;
        case nota <= 9:
            alert("Notable");
            valor--;
            break;
        case nota == 10:
            alert("Sobresaliente");
            valor--;
            break;
        }
    }