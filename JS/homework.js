import galleryItems from '/JS/gallery-items.js'

const creatImagesListRootRef = document.querySelector('.gallery');
const largeImage = document.querySelector('.lightbox__image');


galleryItems.forEach(element => {
    console.log(element);
    const listImagesRef = document.createElement(`li`); //создает элемент списка li
    const linkImagesRef = document.createElement(`a`); //создает элемент a
    const imagesRef = document.createElement(`img`); //создает элемент списка img
    imagesRef.insertAdjacentHTML('afterbegin', element);//добавляет элемент в начало списка
    creatImagesListRootRef.append(listImagesRef);//вставляет узел с элементами li в ul после ('#gallery')

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

creatImagesListRootRef.addEventListener('click', onGallaryClick)

function onGallaryClick (event) {
    event.preventDefault()

    console.log(event.target)

    if (event.target.nodeName !== 'IMG') {
        return;
    }

    
    
    const imgRef = event.target;
    const largeImageURL = imgRef.dataset.sourse;

    setLargeImageSRC(largeImageURL)
    
}

function setLargeImageSRC (url) {
    largeImage.src = url
}


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