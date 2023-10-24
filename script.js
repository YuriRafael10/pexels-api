const apiKey = "cUzMHx9MQddox97hvea9dXiPj8JkZzRbT9pUae48QCUa2cRc3UF4tG3q"
const headers = {
  Authorization: apiKey,
}
document.addEventListener("DOMContentLoaded", function () {
  const apiUrl = "https://api.pexels.com/v1/curated"

  fetch(apiUrl, { headers })
    .then((response) => {
      if (response.ok) {
        return response.json()
      }
      throw new Error("Erro na requisição à API do Pexels")
    })
    .then((data) => {
      const numImgs = data.photos.length
      for (let i = 0; i <= numImgs; i++) {
        const img = document.createElement("img")
        img.src = data.photos[i].src.large
        img.alt = data.photos[i].alt

        if (i < numImgs / 3) {
          coluna(1, img)
        } else if (i < (2 * numImgs) / 3) {
          coluna(2, img)
        } else {
          coluna(3, img)
        }
      }
    })
    .catch((error) => {
      console.error("Erro:", error)
    })
})
function coluna(x, img) {
  const col = document.createElement("div")
  col.classList.add("row", "mb-3")
  col.appendChild(img)
  document.querySelector(`#body .row #col${x}`).appendChild(col)
}
