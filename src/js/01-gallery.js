import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

// 
// 5. Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.



// 1. Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.

const galleryEl = document.querySelector('.gallery')

const imgItemEl = createImageItemEl(galleryItems)

galleryEl.insertAdjacentHTML('beforeend', imgItemEl)

galleryEl.addEventListener('click' , onImageClick)


function createImageItemEl(images) {
    return images.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
                                    <a class="gallery__link" href="${original}">
                                        <img
                                        class="gallery__image"
                                        src="${preview}"
                                        data-source= "${original}"
                                        alt="${description}"
                                        />
                                    </a>
                                </li>`;
    }).join('');
}

// 2. Реализация делегирования на ul.gallery и получение url большого изображения.

function onImageClick(event) {
    event.preventDefault();

   const imgEl = event.target
        if(!imgEl.classList.contains('gallery__image')){
    return;
        }
    
 
// 4. Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.
// Замена значения атрибута src элемента < img > в модальном окне перед открытием. 
// 5. Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.

    const instance = basicLightbox.create(
`
    <img src="${imgEl.dataset.source}" width="800" height="600">
`)
    
    instance.show();

//    6. Закрытие с клавиатуры
    
    galleryEl.addEventListener('keydown', (e) => {
        if(e.key === 'Escape') {
            instance.close();
        }
    })
}
