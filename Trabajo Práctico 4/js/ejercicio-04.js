class Producto {
    constructor(codigo, nombre, precio) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }
    impDato() {
        document.getElementById("producto").innerHTML = `Código: ${this.codigo}<br>Nombre: ${this.nombre}<br>Precio: $${this.precio}`
    };
}

let producto1 = new Producto("001","Nesquik 800gr",1100);
let producto2 = new Producto("002","Coca-Cola 3L",1300);
let producto3 = new Producto("003","Azúcar 1Kg",430);
let productos = [
    producto1,
    producto2,
    producto3,
];

const impDatos = () => {
    let infoLista = "<br><h2>PRODUCTOS:</h2><hr><br><ol>";
    productos.forEach((producto) => {
        infoLista += "<li><b>Código: </b>" + producto.codigo + "<br>" +
        "<b>Nombre: </b>" + producto.nombre + "<br>" +
        "<b>Precio: </b>" + "$" + producto.precio + "<br></li><hr>";
    })
    infoLista += "</ol>"
    return document.getElementById("producto").innerHTML = infoLista
};