import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);




// 1.Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.Используй готовый код из первого задания.

const galleryEl = document.querySelector('.gallery')

const imgItemEl = createImageItemEl(galleryItems)

// 3. Инициализация библиотеки после того как элементы галереи созданы и добавлены в ul.gallery. Для этого ознакомься с документацией SimpleLightbox - в первую очередь секции «Usage» и «Markup».

galleryEl.insertAdjacentHTML('beforeend', imgItemEl)

galleryEl.addEventListener('click' , onImageClick)


function createImageItemEl(images) {
    return images.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
                                    <a class="gallery__link" href="${original}">
                                        <img
                                        class="gallery__image"
                                        src="${preview}"
                                        alt="${description}"
                                        />
                                    </a>
                                </li>`;
    }).join('');
}


// 4. Посмотри в документации секцию «Options» и добавь отображение подписей к изображениям из атрибута alt. Пусть подпись будет снизу и появляется через 250 миллисекунд после открытия изображения.


galleryEl.addEventListener('click', onImageClik)

function onImageClick(event) {
    event.preventDefault();
    const lightbox = new SimpleLightbox('.gallery__item a', 
    {captionDelay: 250,   captionsData: 'alt',
close: true, enableKeyboard: true});   
    lightbox.open();
}

cardsGallery.addEventListener('click', function(e) {
    e.preventDefault();
    const lightbox = new SimpleLightbox('.gallery__item a', 
    {captionDelay: 250, close: true, enableKeyboard: true});   
    lightbox.open();

});