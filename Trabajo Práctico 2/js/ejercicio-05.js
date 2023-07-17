let dni = parseFloat(prompt("Ingrese su DNI:"));

do {
if (isNaN(dni)) {
    alert("El dato introducido no es un número.");
    dni = parseFloat(prompt("Ingrese su DNI:"));
}
} while (isNaN(dni)) {
    do {
    if (dni < 0 || dni > 99999999) {
        alert("El número ingresado tiene que estar entre 0 y 99,999,999 incluidos.");
        dni = parseFloat(prompt("Ingrese su DNI:"));
    }
}
 while (dni < 0 || dni > 99999999) {
    switch (dni % 23) {
        case 0:
            document.write("Le corresponde la letra T.");
            break;
        case 1:
            document.write("Le corresponde la letra R.");
            break;
        case 2:
            document.write("Le corresponde la letra W.");
            break;
        case 3:
            document.write("Le corresponde la letra A.");
            break;
        case 4:
            document.write("Le corresponde la letra G.");
            break;
        case 5:
            document.write("Le corresponde la letra M.");
            break;
        case 6:
            document.write("Le corresponde la letra Y.");
            break;
        case 7:
            document.write("Le corresponde la letra F.");
            break;
        case 8:
            document.write("Le corresponde la letra P.");
            break;
        case 9:
            document.write("Le corresponde la letra D.");
            break;
        case 10:
            document.write("Le corresponde la letra X.");
            break;
        case 11:
            document.write("Le corresponde la letra B.");
            break;
        case 12:
            document.write("Le corresponde la letra T.");
            break;
        case 13:
            document.write("Le corresponde la letra J.");
            break;
        case 14:
            document.write("Le corresponde la letra Z.");
            break;
        case 15:
            document.write("Le corresponde la letra S.");
            break;
        case 16:
            document.write("Le corresponde la letra Q.");
            break;
        case 17:
            document.write("Le corresponde la letra V.");
            break;
        case 18:
            document.write("Le corresponde la letra H.");
            break;
        case 19:
            document.write("Le corresponde la letra L.");
            break;
        case 20:
            document.write("Le corresponde la letra C.");
            break;
        case 21:
            document.write("Le corresponde la letra K.");
            break;
        case 22:
            document.write("Le corresponde la letra E.");
            break;
    }
}
}