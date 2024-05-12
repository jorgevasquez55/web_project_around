
//editar perfil
document.addEventListener("DOMContentLoaded", function() {
  const editButton = document.querySelector(".profile__content-edit");
  const editPopup = document.getElementById("editPopup");

  editButton.addEventListener("click", function (event) {
    editPopup.style.display = "block";
    event.stopPropagation();
  });

  // guardar los cambios
  document.getElementById("saveChanges").addEventListener("click", function () {
    const newTitle = document.getElementById("editTitle").value;
    const newSubtitle = document.getElementById("editSubtitle").value;
    if (validateTitle(newTitle) && validateSubtitle(newSubtitle)) {
      document.querySelector(".profile__content-title").textContent = newTitle;
      document.querySelector(".profile__content-subtitle").textContent = newSubtitle;
      editPopup.style.display = "none";
    }
  });

  //  cerrar la ventana emergente haciendo clic en cualquier parte fuera de ella
  document.addEventListener("click", function(event) {
    if (event.target !== editPopup && !editPopup.contains(event.target) && event.target !== editButton) {
      editPopup.style.display = "none";
    }
  });

  // cerrar la ventana emergente haciendo clic en el botón de cierre
  document.querySelector(".popup__close-edit").addEventListener("click", function () {
    editPopup.style.display = "none";
  });

  // cerrar la ventana emergente cuando se presiona la tecla "Esc"
  document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
      editPopup.style.display = "none";
    }
  });
});



// modificando el estilo del popup con DOM (popup editar)
const editTitle = document.getElementById("editTitle");
const editSubtitle = document.getElementById("editSubtitle");
const saveChangesButton = document.getElementById("saveChanges");

editTitle.style.borderStyle = "none";
editTitle.style.fontFamily = "inter";
editTitle.style.borderBottom = "1px solid";

editSubtitle.style.fontStyle = "inter";
editSubtitle.style.borderStyle = "none";
editSubtitle.style.borderBottom = "1px solid";

saveChangesButton.style.backgroundColor = "black";
saveChangesButton.style.color = "white";
saveChangesButton.style.border = "none";
saveChangesButton.style.padding = "10px 20px";
saveChangesButton.style.cursor = "pointer";
saveChangesButton.style.marginTop = "30px";
saveChangesButton.addEventListener("mouseenter", function () {
  saveChangesButton.style.opacity = 0.5;
});

//efecto hover
saveChangesButton.addEventListener("mouseleave", function () {
  // Restaurar la opacidad a 1 cuando el cursor sale del botón
  saveChangesButton.style.opacity = 1;
});

document
  .querySelector(".profile__content-add")
  .addEventListener("click", function () {
    document.getElementById("addPopup").style.display = "block";
  });



//aqui se eliminan las cards
function removeCard(trashButton) {
  trashButton.addEventListener("click", function() {
      let card = trashButton.closest(".cards__one, .cards__two, .cards__three, .cards__for, .cards__five, .cards__six, .cards__new");
      // Eliminar la tarjeta del DOM
      card.remove();
  });
}
function addTrashButtonEvents() {
  let trashButtons = document.querySelectorAll(".cards__one-trash, .cards__two-trash, .cards__three-trash, .cards__for-trash, .cards__five-trash, .cards__six-trash");
  trashButtons.forEach(function(trashButton) {
      removeCard(trashButton);
  });
}



addTrashButtonEvents();

//ventana añadir lugar
document.addEventListener("DOMContentLoaded", function() {
  const saveChangesEditButton = document.getElementById("saveChangesEdit");
  const addPopup = document.getElementById("addPopup");
  const addButton = document.querySelector(".profile__content-add");
  const closeAddButton = document.querySelector(".popup__close-add");

  // Función para cerrar la ventana emergente
  function closePopup() {
    addPopup.style.display = "none";
  }

  // Evento para abrir la ventana emergente al hacer clic en el botón de añadir
  addButton.addEventListener("click", function (event) {
    addPopup.style.display = "block";
    event.stopPropagation(); // Evitar que el evento se propague al documento
  });

  // Evento para guardar los cambios y agregar una nueva tarjeta al hacer clic en el botón
  saveChangesEditButton.addEventListener("click", function () {
    let title = document.getElementById("editPlace").value;
    let imageUrl = document.getElementById("editImage").value;

    let newCard = document.createElement("div");
    newCard.classList.add("cards__new");

    let trashButton = document.createElement("button");
    trashButton.classList.add("cards__one-trash");

    let image = document.createElement("img");
    image.classList.add("cards__new-image");
    image.src = imageUrl;

    let name = document.createElement("h3");
    name.classList.add("cards__one-name");
    name.textContent = title;

    let span = document.createElement("span");
    let heartButton = document.createElement("button");
    heartButton.classList.add("cards__one-heart");

    span.appendChild(heartButton);
    name.appendChild(span);
    newCard.appendChild(trashButton);
    newCard.appendChild(image);
    newCard.appendChild(name);

    let cardsSection = document.querySelector(".cards");
    cardsSection.insertBefore(newCard, cardsSection.firstChild);

    document.getElementById("modal-image").alt = title;

    closePopup(); // Cerrar la ventana emergente después de agregar la tarjeta
    document.getElementById("editPlace").value = "";
    document.getElementById("editImage").value = "";
    removeCard(trashButton);
    addTrashButtonEvents();
  });

  // Evento para cerrar la ventana emergente al hacer clic fuera de ella
  document.addEventListener("click", function(event) {
    if (event.target !== addPopup && !addPopup.contains(event.target) && event.target !== addButton) {
      closePopup();
    }
  });

  // Evento para cerrar la ventana emergente al presionar la tecla Escape
  document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
      closePopup();
    }
  });

  // Evento para cerrar la ventana emergente al hacer clic en el botón de cerrar
  closeAddButton.addEventListener("click", function() {
    closePopup();
  });
});



// modificando el estilo del popup con DOM (popup añadir)
const editPlace = document.getElementById("editPlace");
const editImage = document.getElementById("editImage");
const saveChangesButtonEdit = document.getElementById("saveChangesEdit");

editPlace.style.borderStyle = "none";
editPlace.style.fontFamily = "inter";
editPlace.style.borderBottom = "1px solid";
editPlace.style.width = "inherit";

editImage.style.fontStyle = "inter";
editImage.style.borderStyle = "none";
editImage.style.borderBottom = "1px solid";
editImage.style.width = "inherit";

saveChangesButtonEdit.style.backgroundColor = "black";
saveChangesButtonEdit.style.color = "white";
saveChangesButtonEdit.style.border = "none";
saveChangesButtonEdit.style.padding = "10px 20px";
saveChangesButtonEdit.style.cursor = "pointer";
saveChangesButtonEdit.style.width = "inherit";
saveChangesButtonEdit.style.marginTop = "30px";

//opacidad sobre el botón
saveChangesButtonEdit.addEventListener("mouseenter", function () {
  saveChangesButtonEdit.style.opacity = 0.5;
});

saveChangesButtonEdit.addEventListener("mouseleave", function () {
  saveChangesButtonEdit.style.opacity = 1;
});

//corazon (like)

document.addEventListener("DOMContentLoaded", function () {
  let heartButtons = document.querySelectorAll(".cards__one-heart");

  heartButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      let image = this.parentNode.querySelector(".cards__one-heart");
      image.classList.toggle("select");
    });
  });
});

//Ventana emergente con imagenes

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const close = document.querySelector(".close");

  close.addEventListener("click", closeModal);

  document.querySelectorAll(".cards__new-image").forEach(function(element) {
    element.addEventListener("click", function(event) {
      const imageName = element.alt;
      const imageSrc = element.src;
      openModal(imageSrc, imageName);
    });
  });

  document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
      closeModal();
    }
  });
  window.addEventListener("click", function(event) {
    if (event.target === modal) {
      closeModal();
    }
  });
});

function openModal(imageSrc, caption) {
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modal-image");
  const modalCaption = document.getElementById("modal-caption");

  modal.style.display = "block";
  modalImage.src = imageSrc;
  modalCaption.textContent = caption;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}


// modificar elemento de la ventana modal
const modalCaption = document.getElementById("modal-caption");
modalCaption.style.color = "#ffff";
modalCaption.style.fontSize = "0.55rem";
modalCaption.style.fontWeight = "400";
modalCaption.style.marginTop = "20px";
modalCaption.style.marginLeft = "60px";

// Verificar el ancho de la ventana
let windowWidth = window.innerWidth;

// Establecer el margen izquierdo dependiendo del ancho de la ventana
if (windowWidth <= 320) {
  modalCaption.style.marginLeft = "150px";
} else {
  modalCaption.style.marginLeft = "60px";
}

// codigo para cambiar el atributo alt de forma dinamica
let modal = document.getElementById("modal");
let img = document.querySelectorAll(" .cards__one-image, .cards__two-image, .cards__three-image, .cards__for-image, .cards__five-image, .cards__six-image, .cards-new-image");
let modalImg = document.getElementById("modal-image");
let captionText = document.getElementById("modal-caption");

img.forEach(function(el) {
  el.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
  }
});

let span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
}


