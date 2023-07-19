import { galleryItems } from './gallery-items.js';
// Change code below this line
const listEl = document.querySelector('.gallery');

const createImageItems = galleryItems => {
  return galleryItems
    .map(
      img =>
        `<li class="gallery__item">
   <a class="gallery__link" href="${img.original}">
      <img class="gallery__image" src="${img.preview}" alt="${img.description}"/>
   </a>
</li>`
    )
    .join('');
};
listEl.innerHTML = createImageItems(galleryItems);

var lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});
