let baseDeDatos = [
    {
        nombre: "Samsung Galaxy S23 Ultra",
        detalle: "Pantalla de 6.8 pulgadas, cámara cuádruple 200MP/ 10MP/ 12MP/ 10MP, procesador Qualcom Snapdragon 8 Gen 2 Octacore 3.36GHz, 8GB de memoria RAM, compatible con 5G, memoria interna de 256GB",
        stock: 23,
        precio: 559999,
        marca: "Samsung",
    },
    {
        nombre: "Samsung Galaxy S23+",
        detalle: "Pantalla de 6.6 pulgadas, cámara triple 50 MP / 10 MP / 12 MP, procesador Qualcom Snapdragon 8 Gen 2 Octacore 3.36GHz, 8GB de memoria RAM, compatible con 5G, memoria interna de 256GB",
        stock: 54,
        precio: 459999,
        marca: "Samsung",
    },
    {
        nombre: "iPhone 13",
        detalle: "Pantalla de 6.7 pulgadas, sistema de cámaras Pro de 12 MP: teleobjetivo, procesador Chip A15 Bionic / Nueva CPU de 6 núcleos con 2 núcleos de rendimiento y 4 de eficiencia, 4GB de memoria RAM, compatible con 5G, memoria interna de 256GB",
        stock: 17,
        precio: 1019900,
        marca: "Apple",
    },
    {
        nombre: "Xiaomi Poco F4 GT",
        detalle: "Pantalla de 6.67 pulgadas, cámara triple 64 MP / 8 MP / 2 MP, procesador Qualcomm SM8450 Snapdragon 8 Gen 1, 12GB de memoria RAM, compatible con 5G, memoria interna de 256GB",
        stock: 43,
        precio: 467699,
        marca: "Xiaomi",
    },
    {
        nombre: "Motorola Edge 30 Ultra",
        detalle: "Pantalla de 6.67 pulgadas, cámara triple 200 MP / 12 MP / 50 MP, procesador Qualcomm SM8475 Snapdragon 8+ Gen, 8GB de memoria RAM, compatible con 5G, memoria interna de 512GB",
        stock: 40,
        precio: 454999,
        marca: "Motorola",
    },
    {
        nombre: "Xiaomi 12X",
        detalle: "Pantalla de 6.28 pulgadas, cámara triple 50 MP / 13 MP / 5 MP, procesador Qualcomm SM8250-AC Snapdragon 870 5G, 12GB de memoria RAM, compatible con 5G, memoria interna de 256GB",
        stock: 68,
        precio: 451199,
        marca: "Xiaomi",
    },
    {
        nombre: "Xiaomi 11T Pro",
        detalle: "Pantalla de 6.67 pulgadas, cámara triple 108 MP / 8 MP / 5 MP, procesador Qualcomm SM8350 Snapdragon 888 5G, 12GB de memoria RAM, compatible con 5G, memoria interna de 256GB",
        stock: 94,
        precio: 430999,
        marca: "Xiaomi",
    },
    {
        nombre: "Motorola Edge 40 Pro",
        detalle: "Pantalla de 6.67 pulgadas, cámara triple 50 MP / 12 MP / 50 MP, procesador Qualcomm SM8550-AB Snapdragon 8 Gen 2, 12GB de memoria RAM, compatible con 5G, memoria interna de 512GB",
        stock: 101,
        precio: 379999,
        marca: "Motorola",
    },
    {
        nombre: "Xiaomi Poco M4 Pro 5G",
        detalle: "Pantalla de 6.6 pulgadas, cámara doble 50 MP / 8 MP, procesador Mediatek MT6833P Dimensity 810, 8GB de memoria RAM, compatible con 5G, memoria interna de 256GB",
        stock: 127,
        precio: 243799,
        marca: "Xiaomi",
    },
    {
        nombre: "Samsung Galaxy Z Fold4",
        detalle: "Pantalla de 7.6 pulgadas, cámara triple 50 MP / 10 MP / 12 MP, procesador Qualcomm SM8475 Snapdragon 8+ Gen 1, 12GB de memoria RAM, compatible con 5G, memoria interna de 1T",
        stock: 11,
        precio: 775999,
        marca: "Samsung",
    },
    
];
const mostrarLista = () => {
    let infoLista = "<br><h2>PRODUCTOS:</h2><hr><br><ol>";
    baseDeDatos.forEach((producto) => {
        infoLista += "<li><b>Nombre: </b>" + producto.nombre + "<br>";
        infoLista += "<b>Detalle: </b>" + producto.detalle + "<br>";
        infoLista += "<b>Precio: </b>" + "$" + producto.precio + "<br></li><hr>";
    })
    infoLista += "</ol>"
    return infoLista
};
const busqueda = (busquedaPrompt = prompt("Busca algun producto...")) => {
    let nombres = [];
    for (let index = 0; index < baseDeDatos.length; index++) {
        nombres = baseDeDatos.filter((nombre) => {
            return nombre.nombre.toLowerCase().includes(busquedaPrompt.toLowerCase());
        });
    }
    let lista = "<br><h2>RESULTADOS:</h2><hr><br><ul>";
    for (let i = 0; i < nombres.length; i++) {
        lista += "<li><b>" + nombres[i].nombre + "</b><br>";
        lista += "- Detalle: " + nombres[i].detalle + "<br>";
        lista += "- Precio: " + nombres[i].precio + "<br>";
        lista += "- Stock: " + nombres[i].stock + "<br>";
        lista += "- Marca: " + nombres[i].marca + "<br></li><hr>";
    }
    lista += "</ul>"
    return lista;
};