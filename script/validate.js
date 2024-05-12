//codigo que valida el formulario de editar perfil


 function validateTitle(title) {
  const MIN_LENGTH = 2;
  const MAX_LENGTH = 40;
  const titleError = document.getElementById("titleError");
  const titleLength = title.trim().length;

  if (titleLength === 0) {
      titleError.textContent = "Por favor, rellena este campo";
      return false;
  } else if (titleLength < MIN_LENGTH || titleLength > MAX_LENGTH) {
      titleError.textContent = `Usa al menos 2 caracteres, has introducido ${titleLength} caracter. `;
      return false;
  } else {
      titleError.textContent = "";
  }
  return true;
}


function validateSubtitle(subtitle) {
  const MIN_LENGTH = 2;
  const MAX_LENGTH = 200;
  const subtitleError = document.getElementById("subtitleError");
  const subtitleLength = subtitle.trim().length;

  if (subtitleLength === 0) {
      subtitleError.textContent = "Por favor, introduce este campo";
      return false;
  } else if (subtitleLength < MIN_LENGTH || subtitleLength > MAX_LENGTH) {
      subtitleError.textContent = `Usa al menos 2 caracteres, has introducido ${subtitleLength} caracter.`;
      return false;
  } else {
      subtitleError.textContent = ""; /
  }
  return true;
}



function checkFormValidity() {
  const title = document.getElementById("editTitle").value;
  const subtitle = document.getElementById("editSubtitle").value;
  const saveButton = document.getElementById("saveChanges");

  const isTitleValid = validateTitle(title);
  const isSubtitleValid = validateSubtitle(subtitle);

  saveButton.disabled = !(isTitleValid && isSubtitleValid);
}


document.getElementById("editTitle").addEventListener("input", checkFormValidity);
document.getElementById("editSubtitle").addEventListener("input", checkFormValidity);




//codigo que valida el formulario de add card
document.getElementById("editPlace").addEventListener("input", validateForm);
document.getElementById("editImage").addEventListener("input", validateForm);

function validateForm() {
  const titleInput = document.getElementById("editPlace");
  const imageInput = document.getElementById("editImage");
  const saveButton = document.getElementById("saveChangesEdit");

  const titleValue = titleInput.value.trim();
  const imageValue = imageInput.value.trim();


if (titleValue === "") {
  document.getElementById("editPlaceError").textContent = "Por favor, rellena este campo";
  titleInput.classList.add("error-border");
} else if (titleValue.length < 2) {
  const remainingChars = 2 - titleValue.length;
  document.getElementById("editPlaceError").textContent = `Usa al menos 2 caracteres, has introducido ${titleValue.length} caracter.`;
  titleInput.classList.add("error-border");
} else {
  document.getElementById("editPlaceError").textContent = "";
  titleInput.classList.remove("error-border");
}

// Validación del campo de imagen
if (imageValue === "") {
  document.getElementById("editImageError").textContent = "Por favor, introduce un enlace a la imagen";
  imageInput.classList.add("error-border");
} else if (!isValidURL(imageValue)) {
  document.getElementById("editImageError").textContent = "La URL de la imagen no es válida";
  imageInput.classList.add("error-border");
} else {
  document.getElementById("editImageError").textContent = "";
  imageInput.classList.remove("error-border");
}

// Habilitar o deshabilitar el botón de guardar según la validación
saveButton.disabled = (titleValue === "" || imageValue === "" || titleValue.length < 2 || titleValue.length > 30 || !isValidURL(imageValue));
}

function isValidURL(url) {

return /^(ftp|http|https|data:image):\/\/[^ "]+$/.test(url);
}