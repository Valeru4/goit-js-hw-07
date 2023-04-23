import { galleryItems } from './gallery-items.js';


const galleryEl = document.querySelector('.gallery')

const imgItemEl = createImageItemEl(galleryItems)

galleryEl.insertAdjacentHTML('beforeend', imgItemEl)


galleryEl.addEventListener('click', onImageClick)




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


function onImageClick(event) {
    event.preventDefault();
    
    const imgEl = event.target

    console.log = imgEl.nodeName


    if (imgEl.nodeName !== "IMG") {
        return;
    }



    const html = `<img src="${imgEl.dataset.source}" width="800" height="600">`;
const instance = basicLightbox.create(html, {
    onShow: (instance) => {
        window.addEventListener('keydown', onKeydown);
    },
    onClose: (instance) => {
        window.removeEventListener('keydown', onKeydown);
    }
});


function onKeydown(event) {
    if (event.key === 'Escape') {
        instance.close();
    }

}
        instance.show()

}
