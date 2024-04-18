let lightbox = document.querySelector(".lightbox_container");
const openLightboxIcon = jQuery(".icon_expand_background");
const closeLightboxIcon = jQuery(".fa-xmark");
let previousImgLightbox = jQuery(".previous_lightbox");
let nextImgLightbox = jQuery(".next_lightbox");
let imgLightboxTitle = document.querySelector(".ref_photo");
let imgLightboxCategory = document.querySelector(".category_photo");
let contentImg = document.querySelectorAll(".photo_galery_container");
let imgChange = document.querySelector(".img_lightbox");
let arrayImgLightbox = [];

for (let i = 0; i < contentImg.length; i++) {
  let imgSRC = contentImg[i].querySelector("img").src;
  let imgTitle = contentImg[i].querySelector("#title_photo").textContent;
  let imgCategory = contentImg[i].querySelector("#category_photo").textContent;
  arrayImgLightbox[i] = {
    src: imgSRC,
    title: imgTitle,
    category: imgCategory,
  };
}

let imgLenght = arrayImgLightbox.length;
let currentIndex = 0;

function functionLightbox() {
  openLightboxIcon.click(function (e) {
    lightbox.classList.toggle("overlay_lightbox");
    let divGallery = jQuery(this).closest(".photo_galery_container");
    let getCurrentImg = jQuery(divGallery).find(".photo_galery").attr("src");
    function srcImgFound(srcLightbox) {
      return srcLightbox.src === getCurrentImg;
    }
    let arrayFoundSRC = arrayImgLightbox.find(srcImgFound);
    imgChange.src = arrayFoundSRC.src;
    imgLightboxTitle.innerHTML = arrayFoundSRC.title;
    imgLightboxCategory.innerHTML = arrayFoundSRC.category;
    let findIndexImg = (e) => e === arrayFoundSRC;
    currentIndex = arrayImgLightbox.findIndex(findIndexImg);
  });

  closeLightboxIcon.click(function () {
    lightbox.classList.remove("overlay_lightbox");
  });

  function prevImg() {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = imgLenght - 1;
    }
    changeImg();
  }

  function nextImg() {
    if (currentIndex < imgLenght - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    changeImg();
  }

  function changeImg() {
    imgChange.src = arrayImgLightbox[currentIndex].src;
    imgLightboxTitle.innerHTML = arrayImgLightbox[currentIndex].title;
    imgLightboxCategory.innerHTML = arrayImgLightbox[currentIndex].category;
  }

  previousImgLightbox.click(prevImg);
  nextImgLightbox.click(nextImg);

  jQuery(document).keydown(function (e) {
    if (e.keyCode == 37) {
      prevImg();
    } else if (e.keyCode == 39) {
      nextImg();
    }
  });
}

jQuery(document).ready(functionLightbox);
