class Rectangulo {
    constructor(alto, ancho) {
        this.alto = alto;
        this.ancho = ancho;
    };
    modProp(alto, ancho) {
        this.alto = alto;
        this.ancho = ancho;
        this.mostrarProp();
    };        
    mostrarProp() {
        for (const prop in this) {
            if (prop != "modProp" && prop != "mostrarProp" && prop != "perimCalc" && prop != "areaCalc") {
                console.log(`${prop}: ${this[prop]}`);
            }
        }
    };
    perimCalc(a = this.alto, b = this.ancho) {
        return a * 2 + b * 2;
    };
    areaCalc(a = this.alto, b = this.ancho) {
        return a * b;
    };
}

let rectangulo1 = new Rectangulo(10, 11);
let rectangulo2 = new Rectangulo(2, 50);
let rectangulo3 = new Rectangulo(100, 150);