const galleryItems = [
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
      description: 'Hokkaido Flower',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
      description: 'Container Haulage Freight',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
      description: 'Aerial Beach View',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
      description: 'Flower Blooms',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
      description: 'Alpine Mountains',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
      description: 'Mountain Lake Sailing',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
      description: 'Alpine Spring Meadows',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
      description: 'Nature Landscape',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
      description: 'Lighthouse Coast Sea',
    },
  ];

    const galleryItem = document.querySelector('.js-gallery')
    const modalItem = document.querySelector(".js-lightbox")
    const imgModalItem = document.querySelector(".lightbox__image")
    const buttonItem = document.querySelector('button[data-action="close-lightbox"]')
    const overlayItem = document.querySelector('.lightbox__overlay');
    
    const galleryMarkup = getGalleryMarkup(galleryItems)


    galleryItem.innerHTML=galleryMarkup
    galleryItem.addEventListener("click", onGalleryClick)
  function getGalleryMarkup (items){
return items.map(item => `<li class="gallery_item"><a class="gallery__link" href=${item.original}><img class="gallery__image" src='${item.preview}' data-sourse=${item.original} alt= '${item.description}'></a></li>`).join("")
      

  }


 
  function onGalleryClick(evt){
      evt.preventDefault()
   
      if(evt.target.nodeName !== "IMG"){
        return
      }
      modalItem.classList.add("is-open")
      galleryItems.forEach(item=> {
        if(evt.target.currentSrc === item.preview){

       imgModalItem.setAttribute("src", item.original)
        imgModalItem.setAttribute("alt", item.description)
       }
       })

  }

  
      
  
    function closeModal(evt) { 
        if (evt.target.classList.contains('lightbox__button') || evt.target.classList.contains('lightbox__overlay') || evt.key === 'Escape' ) {
            modalItem.classList.remove('is-open');
            galleryItems.forEach(item => {imgModalItem.removeAttribute('src')})
          }
      }
      

      buttonItem.addEventListener('click', closeModal);
      document.addEventListener('keydown', closeModal); 
      overlayItem.addEventListener('click', closeModal);