// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryList = document.querySelector('.gallery');
const galleryImg = createNewGalerry(galleryItems);
galleryList.insertAdjacentHTML('beforeend', galleryImg);

function createNewGalerry(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
    return `
  <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img  class="gallery__image" src="${preview}" alt="${description}"
        />
      </a>
  </li>`}).join('');
};

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: "alt",
  captionDelay: 250
});
gallery.on('show.simpleLightbox', function () {
});