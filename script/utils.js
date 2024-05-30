function closePopup(popup) {
  popup.style.display = "none";
}

function openImagePopup(imageUrl, title) {
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modal-image");
  const modalCaption = document.getElementById("modal-caption");

  modalImage.src = imageUrl;
  modalImage.alt = title;
  modalCaption.textContent = title;

  modal.style.display = "block";

  const closePopupButton = document.querySelector(".close");
  closePopupButton.addEventListener("click", function() {
    closePopup(modal);
  });
}

export { closePopup, openImagePopup };
