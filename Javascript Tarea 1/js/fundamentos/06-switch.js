//Condicionales multiples
//switch
let numero = 30;
switch (numero) {
    case 1:
        //acciones
        break;
    case 20:
        //acciones
        break;
    default:
        //acciones
        break;
}

// Hacer una aplicación que nos devuelva un mensaje diciendo que día de la semanda es

let dia = new Date().getDay();

switch (dia) {
    case 0:
        console.log('Hoy es Domingo');
        break;
    case 1:
        console.log('Hoy es Lunes');
        break;
    case 2:
        console.log('Hoy es Martes');
        break;
    case 3:
        console.log('Hoy es Miércoles');
        break;
    case 4:
        console.log('Hoy es Jueves');
        break;
    case 5:
        console.log('Hoy es Viernes');
        break;
    case 6:
        console.log('Hoy es Sábado');
        break;
}
/*
En un restaurante los clientes pueden pedir menú de carne, pescado o verdura. Si pide carne se le ofrecerá como bebida vino tinto, si pide pescado se le ofrecerá vino blanco y si pide verdura se le ofrecerá agua

Si no elije el menú de la lista aparecerá la frase elija carne, pescado o verdura.
*/

let menuSeleccionado = prompt(
    'Ingrese un menú para recibir la sugerencia de bebidas\n1:(Carne), 2:(Pescado), 3:(Verdura)'
    );

switch (menuSeleccionado) {
    case '1':
        alert('Le sugerimos acompañar el menú de carne con un buen vino tinto.');
        break;
    case '2':
        alert('Le sugerimos acompañar el menú de pescado con un buen vino blanco.');
        break;
    case '3':
        alert(
            'Le sugerimos acompañar el menú de pescado con un vaso de agua purificada de los manantiales.'
        );
        break;

    default:
        alert(
            'Recuerde que debe elgir entre las siguientes opciones\n1:(Carne), 2:(Pescado), 3:(Verdura)'
            );
        break;
}

/*
Un comerciante hace descunetos a sus clientes de la siguiente forma:
Si ha comprado menos de 100 euros no hay descuento
Si la compra está entre 100 y 300 euros le descuenta un 5%
Si la compra está por encima de 300 hasta 500 euros le  descuenta un 10%
Si la compra supera los 500 euros le descuenta un 15%
*/

let venta = parseFloat(prompt('Ingrese el monto de la venta'));

switch (true) {
    case venta < 100:
        console.log('No hay descuento');
        break;
    case venta <= 300:
        console.log('Tiene un descuento del 5%');
        break;
    case venta <= 500:
        console.log('Tiene un descuento del 10%');
        break;
    case venta > 500:
        console.log('Tiene un descuento del 15%');
        break;

    default:
        console.error('El dato ingreasado no es válido');
        break;
}

/*
En un establecimiento de juegos existen cuatro salas: Arcade, Consolas, Rol, Realidad Virtual. Si un usuario paga 4 créditos puede acceder a todas , si paga 3 solo podrá acceder a los tres primeras, si pagas 2 a las dos primeras y si paga 1 solo a la primera sala.
*/

let creditoPagado = prompt(
    'Ingrese la cantidad de créditos que desea pagar para saber a que sala del establecimiento puede acceder (Salas: Arcade, Consolas, Rol y Realidad Virtual):\n1: (Primera sala), 2: (Primeras dos salas), 3: (Primeras tres salas), 4: (Primeras cuatro salas).'
    );

switch (creditoPagado) {
    case '1':
        alert('Puede acceder a la sala de Arcade.');
        break;
    case '2':
        alert('Puede acceder a las salas de Arcade y Consolas.');
        break;
    case '3':
        alert(
            'Puede acceder a las salas de Arcade, Consolas y Rol.'
        );
        break;
    case '4':
        alert(
            'Puede acceder a las salas de Arcade, Consolas, Rol y Realidad Virtual.'
        );
        break;

    default:
        alert(
            'Recuerde que debe ingresar la cantidad de créditos que desea pagar\n1: (Primera sala), 2: (Primeras dos salas), 3: (Primeras tres salas), 4: (Primeras cuatro salas).'
            );
        break;
}