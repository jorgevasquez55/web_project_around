document.querySelector("#saveChangesEdit").addEventListener("click", function () {
  // Obtener los valores del nombre y el enlace de la imagen
  var title = document.getElementById("editPlace").value;
  var imageUrl = document.getElementById("editImage").value;

  // Verificar si ambos campos están llenos
  if (title.trim() !== "" && imageUrl.trim() !== "") {
    // Crear un nuevo elemento div para la tarjeta
    var card = document.createElement("div");
    card.classList.add(".cards");

    // Crear un elemento de imagen y establecer el enlace de la imagen
    var image = document.createElement("img");
    image.src = imageUrl;
    image.alt = title;

    // Crear un elemento de título y establecer el nombre
    var cardTitle = document.createElement("h3");
    cardTitle.textContent = title;

    // Agregar la imagen y el título a la tarjeta
    card.appendChild(image);
    card.appendChild(cardTitle);

    // Agregar la tarjeta al contenedor de tarjetas existente
    var cardContainer = document.querySelector(".cards-container");
    cardContainer.appendChild(card);

    // Ocultar el popup después de agregar la tarjeta
    document.getElementById("addPopup").style.display = "none";

    // Limpiar los campos del formulario para la próxima entrada
    document.getElementById("editPlace").value = "";
    document.getElementById("editImage").value = "";
  } else {
    // Mostrar un mensaje de error si alguno de los campos está vacío
    alert("Por favor, complete tanto el nombre como el enlace de la imagen.");
  }
});
