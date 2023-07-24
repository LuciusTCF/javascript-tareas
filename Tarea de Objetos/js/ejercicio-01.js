let user = {
    username: "LuciusTCF",
    state: "Disponible",
    role: "Alumno",
    changeState: function () {
        switch (this.state) {
            case "Disponible":
                this.state = "Ausente"
                break;
            case "Ausente":
                this.state = "Disponible"
                break;
        }
    },
    showInfo: function () {
        for (const prop in this) {
            if (prop != "changeState" && prop != "showInfo") {
                console.log(`${prop}: ${this[prop]}`);
            }
        }
    }
};