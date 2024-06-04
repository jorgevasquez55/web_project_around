import Card from './Card.js';
import FormValidator from './FormValidator.js';
import { closePopup, openImagePopup } from './utils.js';

document.addEventListener("DOMContentLoaded", function() {
  const saveChangesEditButton = document.getElementById("saveChangesEdit");
  const addPopup = document.getElementById("addPopup");
  const addButton = document.querySelector(".profile__content-add");
  const closeAddButton = document.querySelector(".popup__close-add");

  function closePopupWrapper() {
    closePopup(addPopup);
  }

  addButton.addEventListener("click", function(event) {
    addPopup.style.display = "block";
    event.stopPropagation();
  });

  saveChangesEditButton.addEventListener("click", function(event) {
    event.preventDefault();
    const title = document.getElementById("editPlace").value;
    const imageUrl = document.getElementById("editImage").value;

    const cardData = {
      text: title,
      imageLink: imageUrl
    };

    const card = new Card(cardData, '#card-template');
    document.querySelector('.cards').prepend(card.getElement());

    closePopupWrapper();
    document.getElementById("editPlace").value = "";
    document.getElementById("editImage").value = "";
  });

  document.addEventListener("click", function(event) {
    if (event.target !== addPopup && !addPopup.contains(event.target) && event.target !== addButton) {
      closePopupWrapper();
    }
  });

  document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
      closePopupWrapper();
    }
  });

  closeAddButton.addEventListener("click", function() {
    closePopupWrapper();
  });

  const validationConfig = {
    inputSelector: '.form__input',
    submitButtonSelector: '.form__submit',
    inactiveButtonClass: 'form__submit_disabled',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'form__input-error_active'
  };

  const formElement = document.querySelector('#addCardForm');
  const formValidator = new FormValidator(validationConfig, formElement);
  formValidator.enableValidation();
});


document.addEventListener("DOMContentLoaded", function() {
  const editButton = document.querySelector(".profile__content-edit");
  const editPopup = document.getElementById("editPopup");
  const saveChangesButton = document.getElementById("saveChanges");

  editButton.addEventListener("click", function(event) {
    editPopup.style.display = "block";
    event.stopPropagation();
  });

  saveChangesButton.addEventListener("click", function() {
    const newTitle = document.getElementById("editTitle").value;
    const newSubtitle = document.getElementById("editSubtitle").value;
    if (validateTitle(newTitle) && validateSubtitle(newSubtitle)) {
      document.querySelector(".profile__content-title").textContent = newTitle;
      document.querySelector(".profile__content-subtitle").textContent = newSubtitle;
      editPopup.style.display = "none";
    }
  });

  document.addEventListener("click", function(event) {
    if (event.target !== editPopup && !editPopup.contains(event.target) && event.target !== editButton) {
      editPopup.style.display = "none";
    }
  });

  document.querySelector(".popup__close-edit").addEventListener("click", function() {
    editPopup.style.display = "none";
  });

  document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
      editPopup.style.display = "none";
    }
  });
});

// Style popup elements
const editTitle = document.getElementById("editTitle");
const editSubtitle = document.getElementById("editSubtitle");
const saveChangesButton = document.getElementById("saveChanges");

Object.assign(editTitle.style, {
  borderStyle: "none",
  fontFamily: "inter",
  borderBottom: "1px solid"
});

Object.assign(editSubtitle.style, {
  fontFamily: "inter",
  borderStyle: "none",
  borderBottom: "1px solid"
});

Object.assign(saveChangesButton.style, {
  backgroundColor: "black",
  color: "white",
  border: "none",
  padding: "10px 20px",
  cursor: "pointer",
  marginTop: "30px"
});

saveChangesButton.addEventListener("mouseenter", function() {
  saveChangesButton.style.opacity = 0.5;
});

saveChangesButton.addEventListener("mouseleave", function() {
  saveChangesButton.style.opacity = 1;
});

document.querySelector(".profile__content-add").addEventListener("click", function() {
  document.getElementById("addPopup").style.display = "block";
});

// Remove cards
function removeCard(trashButton) {
  trashButton.addEventListener("click", function() {
    let card = trashButton.closest(".cards__one, .cards__two, .cards__three, .cards__for, .cards__five, .cards__six, .cards__new");
    card.remove();
  });
}

function addTrashButtonEvents() {
  document.querySelectorAll(".cards__one-trash, .cards__two-trash, .cards__three-trash, .cards__for-trash, .cards__five-trash, .cards__six-trash").forEach(removeCard);
}

addTrashButtonEvents();

// Popup with images
document.addEventListener("DOMContentLoaded", function() {
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modal-image");
  const modalCaption = document.getElementById("modal-caption");
  const close = document.querySelector(".close");

  close.addEventListener("click", closeModal);

  document.querySelectorAll(".cards__new-image").forEach(function(element) {
    element.addEventListener("click", function() {
      openModal(element.src, element.alt);
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

const modalCaption = document.getElementById("modal-caption");
Object.assign(modalCaption.style, {
  color: "#fff",
  fontSize: "0.55rem",
  fontWeight: "400",
  marginTop: "20px",
  marginLeft: window.innerWidth <= 320 ? "150px" : "60px"
});

// Change image alt attribute dynamically
document.querySelectorAll(".cards__one-image, .cards__two-image, .cards__three-image, .cards__for-image, .cards__five-image, .cards__six-image, .cards-new-image").forEach(function(el) {
  el.onclick = function() {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-image");
    const captionText = document.getElementById("modal-caption");

    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
  }
});

document.querySelector(".close").onclick = function() {
  document.getElementById("modal").style.display = "none";
}
