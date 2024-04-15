let lightbox = document.querySelector(".lightbox_container");
const iconCloseLightbox = jQuery(".fa-xmark");

/* Lightbox

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

function lightboxPhotos() {
  jQuery(document).ready(function () {
    const iconExpend = document.querySelectorAll(".icon_expand_background");
    for (let iconLightbox of iconExpend) {
      console.log(iconLightbox);
      console.log(contentImg);
      iconLightbox.addEventListener("click", function () {
        console.log("Icon ok");
        lightbox.classList.toggle("overlay_lightbox");
        let divGallery = jQuery(this).closest(".photo_galery_container");
        let getCurrentImg = jQuery(divGallery)
          .find(".photo_galery")
          .attr("src");
        imgChange.src = getCurrentImg;
        let getCurrentCategory = jQuery(divGallery)
          .find("#category_photo")
          .text();
        imgLightboxCategory.innerHTML = getCurrentCategory;
        let getCurrentTitle = jQuery(divGallery).find("#title_photo").text();
        imgLightboxTitle.innerHTML = getCurrentTitle;
        console.log(imgLenght);
      });
    }

    iconCloseLightbox.click(function () {
      lightbox.classList.remove("overlay_lightbox");
    });

    function prevImg() {
      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = imgLenght - 1;
      }
      //currentIndex = (currentIndex - 1 + imgLenght) % imgLenght;
      if (currentIndex <= 0) {
        currentIndex = imgLenght - 1;
      } else {
        currentIndex--;
      }
      console.log(imgLenght);
      console.log(currentIndex);
      changeImg();
    }

    function nextImg() {

      if (currentIndex < imgLenght - 1) {
        currentIndex++;
      } else {
        currentIndex = 0;
      }
      //currentIndex = (currentIndex + 1) % imgLenght;
      if (currentIndex < imgLenght - 1) {
        currentIndex = currentIndex + 1;
      } else {
        currentPic = 0;
      }
      console.log(imgLenght);
      console.log(currentIndex);
      changeImg();
    }

    function changeImg() {
      imgChange.src = arrayImgLightbox[currentIndex].src;
      imgLightboxTitle.innerHTML = arrayImgLightbox[currentIndex].title;
      imgLightboxCategory.innerHTML = arrayImgLightbox[currentIndex].category;
    }

    previousImgLightbox.click(prevImg);
    nextImgLightbox.click(nextImg);
  });
}
window.onload = lightboxPhotos();
*/
