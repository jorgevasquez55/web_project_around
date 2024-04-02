// popup de editar el perfil explorador. (perfil)
document
  .querySelector(".porfile__edit-button")
  .addEventListener("click", function () {
    document.getElementById("editPopup").style.display = "block";
  });

// aqui se guardan los cambios-
document.getElementById("saveChanges").addEventListener("click", function () {
  var newTitle = document.getElementById("editTitle").value;
  var newSubtitle = document.getElementById("editSubtitle").value;
  document.querySelector(".porfile__title").textContent = newTitle;
  document.querySelector(".porfile__subtitle").textContent = newSubtitle;
  document.getElementById("editPopup").style.display = "none";
});

// aqui se cierra la ventana
document
  .querySelector(".popup__close-edit")
  .addEventListener("click", function () {
    document.getElementById("editPopup").style.display = "none";
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
saveChangesButton.addEventListener("mouseenter", function () {
  saveChangesButton.style.opacity = 0.5;
});

//efecto hover
saveChangesButton.addEventListener("mouseleave", function () {
  // Restaurar la opacidad a 1 cuando el cursor sale del botón
  saveChangesButton.style.opacity = 1;
});

//popup de añadir lugar (cards)
document
  .querySelector(".porfile__add-button")
  .addEventListener("click", function () {
    document.getElementById("addPopup").style.display = "block";
  });

// aqui se cierra la ventana
document
  .querySelector(".popup__close-add")
  .addEventListener("click", function () {
    document.getElementById("addPopup").style.display = "none";
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

//opacidad sobre el botón
saveChangesButtonEdit.addEventListener("mouseenter", function () {
  saveChangesButtonEdit.style.opacity = 0.5;
});

saveChangesButtonEdit.addEventListener("mouseleave", function () {
  saveChangesButtonEdit.style.opacity = 1;
});

//corazon (like)

document.addEventListener("DOMContentLoaded", function () {
  var heartButtons = document.querySelectorAll(".cards__one-heart");

  heartButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var image = this.parentNode.querySelector(".cards__one-heart");
      image.classList.toggle("select");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".cards__one");

  cards.forEach(function (card) {
    const image = card.querySelector(".cards__one-image");
    const name = card.querySelector(".cards__one-name").textContent;

    //para abrir las imagenes

    image.addEventListener("click", function () {
      const modal = document.getElementById("modal");
      const modalImage = document.getElementById("modal-image");
      const modalCaption = document.getElementById("modal-caption");

      modal.style.display = "block";
      modalImage.src = image.src;
      modalCaption.textContent = name;
    });
  });

  const close = document.getElementsByClassName("close")[0];
  close.addEventListener("click", function () {
    document.getElementById("modal").style.display = "none";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".cards__two");

  cards.forEach(function (card) {
    const image = card.querySelector(".cards__two-image");
    const name = card.querySelector(".cards__two-name").textContent;

    image.addEventListener("click", function () {
      const modal = document.getElementById("modal");
      const modalImage = document.getElementById("modal-image");
      const modalCaption = document.getElementById("modal-caption");

      modal.style.display = "block";
      modalImage.src = image.src;
      modalCaption.textContent = name;
    });
  });

  const close = document.getElementsByClassName("close")[0];
  close.addEventListener("click", function () {
    document.getElementById("modal").style.display = "none";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".cards__three");

  cards.forEach(function (card) {
    const image = card.querySelector(".cards__three-image");
    const name = card.querySelector(".cards__three-name").textContent;

    image.addEventListener("click", function () {
      const modal = document.getElementById("modal");
      const modalImage = document.getElementById("modal-image");
      const modalCaption = document.getElementById("modal-caption");

      modal.style.display = "block";
      modalImage.src = image.src;
      modalCaption.textContent = name;
    });
  });

  const close = document.getElementsByClassName("close")[0];
  close.addEventListener("click", function () {
    document.getElementById("modal").style.display = "none";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".cards__for");

  cards.forEach(function (card) {
    const image = card.querySelector(".cards__for-image");
    const name = card.querySelector(".cards__for-name").textContent;

    image.addEventListener("click", function () {
      const modal = document.getElementById("modal");
      const modalImage = document.getElementById("modal-image");
      const modalCaption = document.getElementById("modal-caption");

      modal.style.display = "block";
      modalImage.src = image.src;
      modalCaption.textContent = name;
    });
  });

  const close = document.getElementsByClassName("close")[0];
  close.addEventListener("click", function () {
    document.getElementById("modal").style.display = "none";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".cards__five");

  cards.forEach(function (card) {
    const image = card.querySelector(".cards__five-image");
    const name = card.querySelector(".cards__five-name").textContent;

    image.addEventListener("click", function () {
      const modal = document.getElementById("modal");
      const modalImage = document.getElementById("modal-image");
      const modalCaption = document.getElementById("modal-caption");

      modal.style.display = "block";
      modalImage.src = image.src;
      modalCaption.textContent = name;
    });
  });

  const close = document.getElementsByClassName("close")[0];
  close.addEventListener("click", function () {
    document.getElementById("modal").style.display = "none";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".cards__six");

  cards.forEach(function (card) {
    const image = card.querySelector(".cards__six-image");
    const name = card.querySelector(".cards__six-name").textContent;

    image.addEventListener("click", function () {
      const modal = document.getElementById("modal");
      const modalImage = document.getElementById("modal-image");
      const modalCaption = document.getElementById("modal-caption");

      modal.style.display = "block";
      modalImage.src = image.src;
      modalCaption.textContent = name;
    });
  });

  const close = document.getElementsByClassName("close")[0];
  close.addEventListener("click", function () {
    document.getElementById("modal").style.display = "none";
  });
});

// modificar elemento de la ventana modal
const modalCaption = document.getElementById("modal-caption");
modalCaption.style.color = "#ffff";
modalCaption.style.fontSize = "0.55rem";
modalCaption.style.fontWeight = "400";
modalCaption.style.marginTop = "20px";
modalCaption.style.marginLeft = "60px";

// Verificar el ancho de la ventana
var windowWidth = window.innerWidth;

// Establecer el margen izquierdo dependiendo del ancho de la ventana
if (windowWidth <= 320) {
  modalCaption.style.marginLeft = "150px";
} else {
  modalCaption.style.marginLeft = "60px";
}
