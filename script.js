let url = "https://api.artic.edu/api/v1/artworks";

const showData = (data) => {
  let list = "";
  for (let i = 0; i < data.length; i++) {
    let urlImage = `https://www.artic.edu/iiif/2/${data[i].image_id}/full/843,/0/default.jpg`;
    list += `<div class="d-flex justify-content-center mb-5"><div class="card" style="width: 40%; margin: 1rem;">
        <img src=${urlImage} class="card-img-top align-self-center pt-4" style="height: 400px; width: 400px;"alt="...">
        <div class="card-body">
          <h5 class="card-title">${data[i].title}</h5>
          <p class="card-text">${data[i].thumbnail.alt_text}</p>
        </div>
      </div></div>`;
  }
  document.getElementById("root").innerHTML = list;
};

fetch(url)
  .then((response) => response.json())
  .then((data) => showData(data.data))
  .catch((error) => console.log(error));
