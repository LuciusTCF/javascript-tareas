const myModal = new bootstrap.Modal(document.getElementById("updateModal"));
const mostrarModal = (index) => {
  document.querySelector(
    "#modalImg"
  ).innerHTML = `<img class="modalImagen" src="${
    document.querySelectorAll("img")[index].src
  }" alt="${document.querySelectorAll("img")[index].alt}"></img>`;
  myModal.show();
};

const anterior = (indexAnt) => {
  mostrarModal(indexAnt);
};
const siguiente = (indexSig) => {
  mostrarModal(indexSig);
};
