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
    event.preventDefault(); // Asegúrate de prevenir el comportamiento por defecto del formulario
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
