let usuario = {
    username: "LuciusTCF",
    state: "Disponible",
    role: "Alumno",
    cambiarEstado: function () {
        switch (this.state) {
            case "Disponible":
                this.state = "Ausente"
                break;
            case "Ausente":
                this.state = "Disponible"
                break;
        }
    },
    mostrarInfo: function () {
        for (const prop in this) {
            if (prop != "cambiarEstado" && prop != "mostrarInfo") {
                console.log(`${prop}: ${this[prop]}`);
            }
        }
    },
};