import galleryItems from './gallery-items.js';

const refs = {
    creatImagesListRootRef: document.querySelector('.gallery'),
    lightBox: document.querySelector('.lightbox'),
    largeImage: document.querySelector('.lightbox__image'),
    closeBtn: document.querySelector('.lightbox__button'),
    overlay: document.querySelector('.lightbox__overlay'),
}

/* const creatImagesListRootRef = document.querySelector('.gallery');
const largeImage = document.querySelector('.lightbox__image'); */


galleryItems.forEach(element => {
    /* console.log(element); */
    const listImagesRef = document.createElement(`li`); //создает элемент списка li
    const linkImagesRef = document.createElement(`a`); //создает элемент a
    const imagesRef = document.createElement(`img`); //создает элемент списка img
    imagesRef.insertAdjacentHTML('afterbegin', element);//добавляет элемент в начало списка
    refs.creatImagesListRootRef.append(listImagesRef);//вставляет узел с элементами li в ul после ('#gallery')

    listImagesRef.classList.add('gallery__item');//добавляет класс
    
    listImagesRef.append(linkImagesRef);//вставляет узел с элементами a после li
    linkImagesRef.classList.add('gallery__link')//добавляет класс
    linkImagesRef.setAttribute('href', element.original)//добавляет атрибут

    linkImagesRef.append(imagesRef);//вставляет узел с элементами img после a    
    imagesRef.classList.add('gallery__image')//добавляет класс
    imagesRef.setAttribute('src', element.preview);//добавляет атрибут
    imagesRef.setAttribute('alt', element.description);//добавляет атрибут
    imagesRef.setAttribute('data-source', element.original);//добавляет атрибут  

    
}    
)

refs.creatImagesListRootRef.addEventListener('click', onGallaryClick);
refs.closeBtn.addEventListener('click', closeModal);
refs.overlay.addEventListener('click', overlayClick);

function onGallaryClick (event) {
    event.preventDefault()
    if (event.target.nodeName !== 'IMG') {
        return;
    }
        
    const imgRef = event.target;   
    const largeImageURL = imgRef.dataset.source;
    const largeImageALT = imgRef.alt;
    
    refs.largeImage.src = largeImageURL;   
    refs.largeImage.alt = largeImageALT;
    openModal();
}

function openModal() {
    window.addEventListener('keydown', onKeyPress);
    refs.lightBox.classList.add('is-open');
}
  
function closeModal() {
    refs.lightBox.classList.remove('is-open');
    window.removeEventListener('keydown', onKeyPress);
    refs.largeImage.src = '';
    refs.largeImage.alt = '';
}

function overlayClick(event) {
    if (event.currentTarget === event.target) {
      closeModal();
    }
}

function onKeyPress(event) {
    let activeIndex = Number(event.target.dataset.index);
  
    /* switch (event.code) {
      case 'Escape':
        closeModal();
        break;
  
      case 'ArrowRight':
        activeIndex + 1 === galleryItems.length
          ? (activeIndex = 0)
          : (activeIndex += 1);
        refs.lightboxImg.src = galleryItems[activeIndex].original;
        break;
  
      case 'ArrowLeft':
        activeIndex === 0
          ? (activeIndex = galleryItems.length - 1)
          : (activeIndex -= 1);
        refs.lightboxImg.src = galleryItems[activeIndex].original;
        break;
    } */
}




/* 
function onLightBoxClick (event) {
    event.preventDefault()    

    if (event.target.nodeName !== 'IMG') {
        return;
    }
    
    refs.largeImage.src =largeImageURL;
    
}

creatImagesListRootRef.addEventListener('click', onLightBoxClick) */




/* function setLargeImageSRC (url) {
    largeImage.src = url
} */


/* const refs = {
    creatImagesListRootRef: document.querySelector('.gallery');
    listImagesRef: document.createElement(`li`); //создает элемент списка li
    linkImagesRef = document.createElement(`a`); //создает элемент a 
    imagesRef: document.createElement(`img`); //создает элемент списка img
}

galleryItems.forEach(element => {
    console.log(element);
    refs.listImagesRef
    refs.linkImagesRef
    refs.imagesRef    
    imagesRef.insertAdjacentHTML('afterbegin', element);//добавляет элемент в начало списка
    creatImagesListRootRef.append(listImagesRef);//вставляет узел после ('#gallery')   
    refs.listImagesRef.append(imagesRef); 
    imagesRef.classList.add('gallery__image')//добавляет класс
    imagesRef.setAttribute('src', element.preview);//добавляет атрибут
    imagesRef.setAttribute('alt', element.description);//добавляет атрибут
    imagesRef.setAttribute('data-source', element.original);//добавляет атрибут
    listImagesRef.classList.add('gallery__item');
} */



/* creatImagesListRootRef.addEventListener('click', onImageClick)
function onImageClick (event) {

} */