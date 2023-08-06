let texto = document.querySelector("#texto2");
let fuente = 2

const aumentar = () => {
    if (fuente > 1) {
        document.querySelector("#texto1").innerText = "";
        document.querySelector("#texto1").classList = "";
        fuente--;
        texto.classList = `fs-${fuente}`;
    } else {
        document.querySelector("#texto1").innerText = "Ya no se puede aumentar más el tamaño del texto.";
        document.querySelector("#texto1").classList = "border border-2 border-white bg-success text-white m-3 d-flex justify-content-center";
    }
};
const disminuir = () => {
    if (fuente < 6) {
        document.querySelector("#texto1").innerText = "";
        document.querySelector("#texto1").classList = "";
        fuente++;
        texto.classList = `fs-${fuente}`;
    } else {
        document.querySelector("#texto1").innerText = "Ya no se puede disminuir más el tamaño del texto.";
        document.querySelector("#texto1").classList = "border border-2 border-white bg-primary text-white m-3 d-flex justify-content-center";
    }
};