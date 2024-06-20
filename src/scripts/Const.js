export const buttonEdit = document.querySelector(".button_edit");
export const profileName = document.querySelector(".profile__name");
export const profileJob = document.querySelector(".profile__job");
export const profileForm = document.forms.edit;
export const inputName = profileForm.elements.name;
export const job = profileForm.elements.job;
export const buttonAdd = document.querySelector(".button_add");
export const elementsSection = document.querySelector(".elements");
export const popupProfileSelector = ".popup_profile";
export const popupAddSelector = ".popup_add";
export const popupImageSelector = ".popup_image";

import valle from "../images/valle.jpg";
import Rushmore from "../images/Rushmore.jpg";
import canon from "../images/canon.jpg";
import Tahoe from "../images/tahoe.jpg";
import Ruta from "../images/ruta.jpg";
import Roswell from "../images/Roswell.jpg";
import avatar from "../images/Avatar.png";
import logo from "../images/logo.svg";

export const initialCards = [
  {
    name: "Valle de Yosemite",
    link: valle,
  },
  {
    name: "Monte Rushmore",
    link: Rushmore,
  },
  {
    name: "Gran Cañon",
    link: canon,
  },
  {
    name: "Lago Tahoe",
    link: Tahoe,
  },
  {
    name: "Ruta 66",
    link: Ruta,
  },
  {
    name: "Roswell",
    link: Roswell,
  },
];
