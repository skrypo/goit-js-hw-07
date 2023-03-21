import { galleryItems } from "./gallery-items.js";
// Change code below this line

const imgList = document.querySelector(".gallery");
let imgItem = "";
galleryItems.forEach(function (element) {
  imgItem += `<li class="gallery__item">
      <a class="gallery__link" href="${element.original}">
        <img class="gallery__image" data-src="${element.original}"  src = "${element.preview}" alt="${element.description}" />
      </a>
    </li>
  `;
});

imgList.insertAdjacentHTML("beforeend", imgItem);

imgList.addEventListener("click", (event) => {
  event.preventDefault();
  const clickedElement = event.target;

  if (clickedElement.classList.contains("gallery__image")) {
    const origUrl = clickedElement.dataset.src;
    const instance = basicLightbox.create(
      `<img src="${origUrl}" width="800" height="600">`
    );
    instance.show();
  }
});
