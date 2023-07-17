const perimetroRectangulo = (a = ladoA, b = ladoB) => {
    do {
        if (isNaN(a) || isNaN(b)) {
            alert("El dato ingresado no es un número.");
            ladoA = Number(prompt("Ingrese el valor del primer lado del rectángulo"));
            ladoB = Number(prompt("Ingrese el valor del segundo lado del rectángulo"));
        }
    } while (isNaN(a) || isNaN(b)) {
        return `El perímetro del rectángulo es ${2 * (a + b)}.`;
    }
};

let ladoA = Number(prompt("Ingrese el valor del primer lado del rectángulo"));
let ladoB = Number(prompt("Ingrese el valor del segundo lado del rectángulo"));
document.getElementById("texto6").innerHTML = perimetroRectangulo();