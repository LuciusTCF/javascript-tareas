let frase = prompt(`Escriba una frase para ver sus vocales.`);

let fraseSinEspacio = frase.match(/[aeiou]/gi).join("")

document.write(fraseSinEspacio);



//Como esta tarea fue quitada del TP, intenté resolverla con ayuda de internet, donde encontré la solución y luego me puse a ver acerca de Regular Expresions y Flags.