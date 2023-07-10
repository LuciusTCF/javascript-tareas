let edad = parseInt(prompt("Para saber si ya puede conducir, escriba su edad a continuación:"));

do {
    if (isNaN(edad)) {
        alert("El dato ingreasado no es válido.");
        edad = parseInt(prompt("Para saber si ya puede conducir, escriba su edad a continuación:"));
    }
} while (isNaN(edad)); {
    if (edad >= 18) {
        alert("Usted ya puede conducir.");
    } else {
        alert("Usted aún no puede conducir.");
    }
}