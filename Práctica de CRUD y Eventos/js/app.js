import { Image } from "./class.js";

let galeryPlace = document.querySelector("#galeryPlace");
const galery = JSON.parse(localStorage.getItem("images")) || [];
const myModal = new bootstrap.Modal(document.getElementById("updateModal"));
let positionImage = 1;
let index = galery.length - positionImage;
let link = document.querySelector("#link");
let title = document.querySelector("#title");
let desc = document.querySelector("#desc");
let formAdd = document.querySelector("#formAdd");
let formModal = document.querySelector("#formModal");

window.addImage = (event) => {
  event.preventDefault();
  const image = new Image(link.value, title.value, desc.value);
  galery.push(image);
  localStorage.setItem("images", JSON.stringify(galery));
  document.querySelector("form").reset();
  link.focus();
  loadImage();
};
window.loadImage = () => {
  if (galery.length === 0) {
    galeryPlace = `
    <h3 class="my-5 d-flex justify-content-center">No hay imagenes cargadas en el localStorage</h3>
    `;
  } else {
    galeryPlace.innerHTML = "";
    let col = document.createElement("div");
    col.classList = "col my-5";
    let card = `
  <div class="card h-100 d-flex align-content-center">
    <img
    src=${galery[index].src}
    class="card-img-top" alt=${galery[index].alt}
    onclick="nextImage()"
    ondblclick="imageInfo()"
    >
  <div class="d-flex justify-content-center">
  <button
        type="button"
        class="btn btn-danger mx-5 my-2"
        onclick="deleteImage()"
      >
        Eliminar imagen
      </button>
      <button
        type="button"
        class="btn btn-warning mx-5 my-2"
        onclick="showModal()"
      >
        Modificar info.
      </button>
  </div>
    <div id="imageInfo"></div>
    </div>`;
    col.innerHTML = card;
    galeryPlace.append(col);
  }
};

window.deleteImage = () => {
  let confirm = confirm(`¿Está seguro que quiere eliminar la imagen?`);
  if (confirm) {
    galery.splice(index, 1);
    localStorage.setItem("images", JSON.stringify(galery));
    alert("La imagen fue eliminada");
    index = galery.length - positionImage;
    loadImage();
  }
};

window.showModal = () => {
  document.querySelector("#inputModal1").value = galery[index].alt;
  document.querySelector("#inputModal2").value = galery[index].desc;
  myModal.show();
};

window.modifyImage = (event) => {
  event.preventDefault();
  galery[index].alt = document.querySelector("#inputModal1").value;
  galery[index].desc = document.querySelector("#inputModal2").value;
  localStorage.setItem("images", JSON.stringify(galery));
  myModal.hide();
  loadImage();
};

window.nextImage = () => {
  if (index < galery.length - 1) {
    index += 1;
  } else {
    index = 0;
  }
  loadImage();
};

window.imageInfo = () => {
  let info = document.querySelector("#imageInfo");
  info.classList = "card-body";
  info.innerHTML = `<hr class="mt-0 pt-0">
  <div>
  <p class="fs-5 mb-0"><b>Titulo:</b> ${galery[index].alt}</p>
  <p class="fs-5 mb-0"><b>Descripción:</b> ${galery[index].desc}</p>
  </div>
  `;
};

formAdd.addEventListener("submit", addImage);
formModal.addEventListener("submit", modifyImage);

loadImage();
