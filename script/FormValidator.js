class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
    this._submitButton = this._formElement.querySelector(this._config.submitButtonSelector);
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._config.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._config.errorClass);
  }

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._config.inputErrorClass);
    errorElement.classList.remove(this._config.errorClass);
    errorElement.textContent = '';
  }

  _toggleButtonState() {
    if (this._formElement.checkValidity()) {
      this._submitButton.classList.remove(this._config.inactiveButtonClass);
      this._submitButton.disabled = false;
    } else {
      this._submitButton.classList.add(this._config.inactiveButtonClass);
      this._submitButton.disabled = true;
    }
  }

  _setEventListeners() {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  enableValidation() {
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
    this._toggleButtonState();
  }
}

export default FormValidator;

function validateField(value, minLength, maxLength, errorElement) {
  if (value.trim().length === 0) {
    errorElement.textContent = "Por favor, rellena este campo";
    return false;
  } else if (value.trim().length < minLength || value.trim().length > maxLength) {
    errorElement.textContent = `Usa al menos ${minLength} caracteres, has introducido ${value.trim().length} caracter(es).`;
    return false;
  } else {
    errorElement.textContent = "";
    return true;
  }
}

function checkFormValidity() {
  const title = document.getElementById("editTitle").value;
  const subtitle = document.getElementById("editSubtitle").value;
  const saveButton = document.getElementById("saveChanges");

  const isTitleValid = validateField(title, 2, 40, document.getElementById("titleError"));
  const isSubtitleValid = validateField(subtitle, 2, 200, document.getElementById("subtitleError"));

  saveButton.disabled = !(isTitleValid && isSubtitleValid);
}

document.getElementById("editTitle").addEventListener("input", checkFormValidity);
document.getElementById("editSubtitle").addEventListener("input", checkFormValidity);

function validateForm() {
  const place = document.getElementById("editPlace");
  const image = document.getElementById("editImage");
  const saveButton = document.getElementById("saveChangesEdit");

  const isPlaceValid = validateField(place.value, 2, 30, document.getElementById("editPlaceError"));
  const isImageValid = isValidURL(image.value)
    ? (document.getElementById("editImageError").textContent = "", true)
    : (document.getElementById("editImageError").textContent = "La URL de la imagen no es válida", false);

  saveButton.disabled = !(isPlaceValid && isImageValid);
}

function isValidURL(url) {
  return /^(ftp|http|https|data:image):\/\/[^ "]+$/.test(url);
}

document.getElementById("editPlace").addEventListener("input", validateForm);
document.getElementById("editImage").addEventListener("input", validateForm);

