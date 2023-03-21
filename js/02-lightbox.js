import { galleryItems } from "./gallery-items.js";

const imgList = document.querySelector(".gallery");
let imgItem = "";
galleryItems.forEach(function (element) {
  imgItem += `<li class="gallery__item">
      <a class="gallery__link" href="${element.original}">
        <img class="gallery__image"  src = "${element.preview}" alt="${element.description}" />
      </a>
    </li>
  `;
});

imgList.insertAdjacentHTML("beforeend", imgItem);

const lightbox = new SimpleLightbox(".gallery a", {
  elements: galleryItems.map((item) => ({
    src: item.original,
    caption: item.description,
  })),
  captions: true,
  captionDelay: 250,
  captionPosition: "bottom",
  docClose: true,
});

// Open the lightbox when an image is clicked
galleryList.addEventListener("click", (event) => {
  event.preventDefault();
  const clickedElement = event.target;

  if (clickedElement.classList.contains("gallery__image")) {
    lightbox.open();
  }
});
