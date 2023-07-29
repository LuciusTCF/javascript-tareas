let dataBase = [
    {
        name: "Samsung Galaxy S23 Ultra",
        detail: "Pantalla de 6.8 pulgadas, cámara cuádruple 200MP/ 10MP/ 12MP/ 10MP, procesador Qualcom Snapdragon 8 Gen 2 Octacore 3.36GHz, 8GB de memoria RAM, compatible con 5G, memoria interna de 256GB",
        stock: 23,
        price: 559999,
        brand: "Samsung",
    },
    {
        name: "Samsung Galaxy S23+",
        detail: "Pantalla de 6.6 pulgadas, cámara triple 50 MP / 10 MP / 12 MP, procesador Qualcom Snapdragon 8 Gen 2 Octacore 3.36GHz, 8GB de memoria RAM, compatible con 5G, memoria interna de 256GB",
        stock: 54,
        price: 459999,
        brand: "Samsung",
    },
    {
        name: "iPhone 13",
        detail: "Pantalla de 6.7 pulgadas, sistema de cámaras Pro de 12 MP: teleobjetivo, procesador Chip A15 Bionic / Nueva CPU de 6 núcleos con 2 núcleos de rendimiento y 4 de eficiencia, 4GB de memoria RAM, compatible con 5G, memoria interna de 256GB",
        stock: 17,
        price: 1019900,
        brand: "Apple",
    },
    {
        name: "Xiaomi Poco F4 GT",
        detail: "Pantalla de 6.67 pulgadas, cámara triple 64 MP / 8 MP / 2 MP, procesador Qualcomm SM8450 Snapdragon 8 Gen 1, 12GB de memoria RAM, compatible con 5G, memoria interna de 256GB",
        stock: 43,
        price: 467699,
        brand: "Xiaomi",
    },
    {
        name: "Motorola Edge 30 Ultra",
        detail: "Pantalla de 6.67 pulgadas, cámara triple 200 MP / 12 MP / 50 MP, procesador Qualcomm SM8475 Snapdragon 8+ Gen, 8GB de memoria RAM, compatible con 5G, memoria interna de 512GB",
        stock: 40,
        price: 454999,
        brand: "Motorola",
    },
    {
        name: "Xiaomi 12X",
        detail: "Pantalla de 6.28 pulgadas, cámara triple 50 MP / 13 MP / 5 MP, procesador Qualcomm SM8250-AC Snapdragon 870 5G, 12GB de memoria RAM, compatible con 5G, memoria interna de 256GB",
        stock: 68,
        price: 451199,
        brand: "Xiaomi",
    },
    {
        name: "Xiaomi 11T Pro",
        detail: "Pantalla de 6.67 pulgadas, cámara triple 108 MP / 8 MP / 5 MP, procesador Qualcomm SM8350 Snapdragon 888 5G, 12GB de memoria RAM, compatible con 5G, memoria interna de 256GB",
        stock: 94,
        price: 430999,
        brand: "Xiaomi",
    },
    {
        name: "Motorola Edge 40 Pro",
        detail: "Pantalla de 6.67 pulgadas, cámara triple 50 MP / 12 MP / 50 MP, procesador Qualcomm SM8550-AB Snapdragon 8 Gen 2, 12GB de memoria RAM, compatible con 5G, memoria interna de 512GB",
        stock: 101,
        price: 379999,
        brand: "Motorola",
    },
    {
        name: "Xiaomi Poco M4 Pro 5G",
        detail: "Pantalla de 6.6 pulgadas, cámara doble 50 MP / 8 MP, procesador Mediatek MT6833P Dimensity 810, 8GB de memoria RAM, compatible con 5G, memoria interna de 256GB",
        stock: 127,
        price: 243799,
        brand: "Xiaomi",
    },
    {
        name: "Samsung Galaxy Z Fold4",
        detail: "Pantalla de 7.6 pulgadas, cámara triple 50 MP / 10 MP / 12 MP, procesador Qualcomm SM8475 Snapdragon 8+ Gen 1, 12GB de memoria RAM, compatible con 5G, memoria interna de 1T",
        stock: 11,
        price: 775999,
        brand: "Samsung",
    }
    
];
const showList = () => {
    let infoList = "<br><h2>PRODUCTOS:</h2><hr><br><ol>";
    dataBase.forEach((product) => {
        infoList += "<li><b>Nombre: </b>" + product.name + "<br>" +
        "<b>Detalle: </b>" + product.detail + "<br>" +
        "<b>Precio: </b>" + "$" + product.price + "<br></li><hr>";
    })
    infoList += "</ol>"
    return infoList
};
const search = (searchPrompt = prompt("Busca algun producto...")) => {
    let results = [];
    for (let index = 0; index < dataBase.length; index++) {
        results = dataBase.filter((result) => {
            return result.name.toLowerCase().includes(searchPrompt.toLowerCase());
        });
    }
    let list = "<br><h2>RESULTADOS:</h2><hr><br><ul>";
    for (let i = 0; i < results.length; i++) {
        list += "<li><b>" + results[i].name + "</b><br>" +
        "- Detalle: " + results[i].detail + "<br>" +
        "- Precio: " + results[i].price + "<br>" +
        "- Stock: " + results[i].stock + "<br>" +
        "- Marca: " + results[i].brand + "<br></li><hr>";
    }
    list += "</ul>"
    return list;
};
