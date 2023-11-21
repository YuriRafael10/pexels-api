const apiKey = "cUzMHx9MQddox97hvea9dXiPj8JkZzRbT9pUae48QCUa2cRc3UF4tG3q";
const headers = {
  Authorization: apiKey,
};

document.addEventListener("DOMContentLoaded", function () {
  const apiUrl = "https://api.pexels.com/v1/curated";

  fetch(apiUrl, { headers })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Erro na requisição à API do Pexels");
    })
    .then((data) => {
      const numImgs = data.photos.length;
      for (let i = 0; i < numImgs; i++) {
        const img = document.createElement("img");
        img.src = data.photos[i].src.large;
        img.photographer = data.photos[i].photographer;
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        const photoContainer = addPhoto(img, randomNumber);
        document.querySelector("main").appendChild(photoContainer);
      }
    })
    .catch((error) => {
      console.error("Erro:", error);
    });
});

function addPhoto(img, randomNumber) {
  const galleryContainer = document.createElement("div");
  galleryContainer.classList.add(
    "gallery-container",
    `w-${randomNumber}`,
    `h-${randomNumber}`
  );

  const galleryItem = document.createElement("div");
  galleryItem.classList.add("gallery-item");
  galleryContainer.appendChild(galleryItem);

  const galleryImage = document.createElement("div");
  galleryImage.classList.add("image");
  galleryItem.appendChild(galleryImage);

  const image = document.createElement("img");
  image.src = img.src;
  galleryImage.appendChild(image);

  const textDiv = document.createElement("div");
  textDiv.classList.add("text");
  textDiv.textContent = img.photographer;
  galleryItem.appendChild(textDiv);

  // Correção: galleryContainer em vez de container
  document.getElementById("gallery").appendChild(galleryContainer);

  return galleryContainer;
}