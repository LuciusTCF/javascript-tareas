class Persona {
  constructor(nombre, edad, dni, sexo, peso, altura, nacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.nacimiento = nacimiento;
  };
  mostrarGeneracion() {
    switch (true) {
      case (this.nacimiento > 2010 || this.nacimiento < 1930):
        console.log(`${this.nombre} no pertenece a ninguna generación de la lista.`);
        break;
      case this.nacimiento <= 2010 && this.nacimiento >= 1994:
        console.log(`${this.nombre} pertenece a la Generación Z. Su rasgo característico es la irreverencia.`);
        break;
      case this.nacimiento <= 1993 && this.nacimiento >= 1981:
        console.log(`${this.nombre} pertenece a la Generación Y. Su rasgo característico es la frustración.`);
        break;
      case this.nacimiento <= 1980 && this.nacimiento >= 1969:
        console.log(`${this.nombre} pertenece a la Generación X. Su rasgo característico es la obsesión por el éxito.`);
        break;
      case this.nacimiento <= 1968 && this.nacimiento >= 1949:
        console.log(`${this.nombre} pertenece a la Generación Baby Boomer. Su rasgo característico es la ambición.`);
        break;
      case this.nacimiento <= 1948 && this.nacimiento >= 1930:
        console.log(`${this.nombre} pertenece a la Generación Silenciosa. Su rasgo característico es la austeridad.`);
        break;
    }
  };
  esMayorDeEdad() {
    if (this.edad < 18) {
      console.log(`${this.nombre} no es mayor de edad`)
    } else {
      console.log(`${this.nombre} es mayor de edad`)
    }
  };
  mostrarDatos() {
    for (const prop in this) {
      if (prop != "mostrarGeneracion" && prop != "esMayorDeEdad" && prop != "mostrarDatos" && prop != "generaDNI") {
          console.log(`${prop}: ${this[prop]}`);
      }
  }
  };
  generaDNI() {
    // return Math.floor(Math.random() * (100000000 - 10000000)) + 10000000;
    this.dni = Math.floor(Math.random() * (100000000 - 10000000)) + 10000000;
    return `El DNI generado es ${this.dni}`
  };
}

let persona1 = new Persona("José", 48, 12345678, "Masculino", 70, 180, 1975);