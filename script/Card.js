import { openImagePopup } from "./utils.js";

class Card {
  constructor(data, templateSelector) {
    this._text = data.text;
    this._imageLink = data.imageLink;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const cardTemplate = document
      .querySelector(this._templateSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    return cardTemplate;
  }

  _setEventListeners() {
    this._element
      .querySelector(".card__image")
      .addEventListener("click", () => {
        this._handleImageClick();
      });

    this._element
      .querySelector(".card__trash")
      .addEventListener("click", () => {
        this._handleTrashClick();
      });

    const heartElement =
      this._element.querySelector(".card__heart") ||
      this._element.querySelector(".cards__one-heart");
    heartElement.addEventListener("click", () => {
      this._handleHeartClick(heartElement);
    });

    const oneHeartElement = this._element.querySelector(".cards__one-heart");
    if (oneHeartElement) {
      oneHeartElement.addEventListener("click", () => {
        this._handleOneHeartClick(oneHeartElement);
      });
    }
  }

  _handleImageClick() {
    const imageUrl = this._imageLink;
    const title = this._text;
    openImagePopup(imageUrl, title);
  }

  _handleTrashClick() {
    this._element.remove();
  }

  _handleHeartClick(heartElement) {
    if (heartElement.classList.contains("card__heart_active")) {
      heartElement.classList.remove("card__heart_active");
      heartElement.classList.add("card__heart");
    } else {
      heartElement.classList.remove("card__heart");
      heartElement.classList.add("card__heart_active");
    }
  }

  _handleOneHeartClick(oneHeartElement) {
    if (oneHeartElement.classList.contains("card__heart_active")) {
      oneHeartElement.classList.remove("card__heart_active");
      oneHeartElement.classList.add("card__heart");
    } else {
      oneHeartElement.classList.remove("card__heart");
      oneHeartElement.classList.add("card__heart_active");
    }
  }

  getElement() {
    this._element = this._getTemplate();
    this._element.querySelector(".card__text").textContent = this._text;
    this._element.querySelector(".card__image").src = this._imageLink;
    this._element.querySelector(".card__image").alt = this._text;
    this._setEventListeners();
    return this._element;
  }
}

export default Card;
