import { galleryItems } from './gallery-items.js';
// Change code below this line

const listEl = document.querySelector('.gallery');

const createImageItems = galleryItems => {
  return galleryItems
    .map(
      img =>
        `<li class="gallery__item">
  <a class="gallery__link" 
  href="${img.original}">
    <img
      class="gallery__image"
      src="${img.preview}"
      data-source="${img.original}"
      alt="${img.description}"
    />
  </a>
</li>`
    )
    .join('');
};
listEl.innerHTML = createImageItems(galleryItems);

listEl.addEventListener('click', imageItemClickHandler);

function imageItemClickHandler(event) {
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  event.preventDefault();
  displayImagePreview(event.target.dataset.source, event);
}
let currentLightBoxInstance = null;

const displayImagePreview = (imageUrl, event) => {
  const instance = basicLightbox.create(`
    <img src="${imageUrl}" width="800" height="600">
`);
  currentLightBoxInstance = instance;
  instance.show();
};

document.addEventListener('keydown', closeModalByEscape);

function closeModalByEscape(event) {
  if (event.code === 'Escape') {
    currentLightBoxInstance?.close();
  }
}
