// modale

const modaleContactLink = document.querySelector(".contact-modale");
const modaleContainer = document.querySelector("#modale_contact");
let lightbox = document.querySelector(".lightbox_container");

const buttonLoadMore = jQuery("#button_load_more_container");
const listPhotosHome = jQuery("#photo_list_home");

const iconCloseLightbox = jQuery(".fa-xmark");
const previousLink = jQuery(".previous_link");
const previousImgNav = jQuery(".photo_prev_nav");
const nextLink = jQuery(".next_link");
const nextImgNav = jQuery(".photo_next_nav");

const selectFilter = jQuery(
  "#category_select, #format_select, #filter_by_select"
);

// Modale Contact

function openModale() {
  modaleContainer.classList.toggle("overlay");
}

// close modal when user clicks outside of it
window.addEventListener("click", function (e) {
  if (e.target == modaleContainer) {
    modaleContainer.classList.add("animation_modale_out");
    modaleContainer.classList.remove("overlay");
  }
});

jQuery(".contact-modale").click(function () {
  openModale();
  jQuery("input[name=your-ref-photo]").val("");
});

jQuery("#contact_photo").click(function () {
  openModale();
  jQuery("input[name=your-ref-photo]").val(jQuery("#ref_value").text());
});

// Nav More Photos

previousLink.on("mouseover", function () {
  previousImgNav.show();
});

previousLink.on("mouseout", function () {
  previousImgNav.hide();
});

nextLink.on("mouseover", function () {
  nextImgNav.show();
});

nextLink.on("mouseout", function () {
  nextImgNav.hide();
});

// filters
jQuery(document).ready(function () {});

// Lightbox

function lightboxPhotos() {
  jQuery(document).ready(function () {
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
      let imgCategory =
        contentImg[i].querySelector("#category_photo").textContent;
      arrayImgLightbox[i] = {
        src: imgSRC,
        title: imgTitle,
        category: imgCategory,
      };
    }

    let imgLenght = arrayImgLightbox.length;
    let currentIndex = 0;
    const iconExpend = document.querySelectorAll(".icon_expand_background");
    for (let iconLightbox of iconExpend) {
      console.log(iconLightbox);
      iconLightbox.addEventListener("click", function () {
        console.log("aaaaaaaaaaaaaaah");
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
      /*
      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = imgLenght - 1;
      }*/
      currentIndex = (currentIndex - 1 + imgLenght) % imgLenght;
      console.log(imgLenght);
      console.log(currentIndex);
      changeImg();
    }

    function nextImg() {
      /*
      if (currentIndex < imgLenght - 1) {
        currentIndex++;
      } else {
        currentIndex = 0;
      }*/
      currentIndex = (currentIndex + 1) % imgLenght;
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

// menu burger

let menuIconBurger = document.getElementById("icon-menu-burger");
let menuIconClose = document.getElementById("icon-menu-close");
let menuContent = document.getElementById("nav_mobile");
let menuLinks = document.querySelectorAll(".link-menu");

function hideMenu() {
  menuIconClose.style.display = "none";
  menuIconBurger.style.display = "block";
  menuContent.classList.remove("overlay");
}

menuIconBurger.addEventListener("click", function displayMenu() {
  menuIconBurger.style.display = "none";
  menuIconClose.style.display = "block";
  menuContent.classList.toggle("overlay");
});
menuIconClose.addEventListener("click", hideMenu);

// button load more home

jQuery(document).ready(function () {
  let currentPage = 1;
  buttonLoadMore.on("click", function (e) {
    currentPage++;

    jQuery.ajax({
      type: "POST",
      url: "./wp-admin/admin-ajax.php",
      dataType: "json",
      data: {
        action: "load_more_photos",
        paged: currentPage,
      },
      success: function (res) {
        if (currentPage >= res.max) {
          buttonLoadMore.hide();
        }
        listPhotosHome.append(res.html);
      },
    });
  });
  selectFilter.change(function () {
    let categoryOptionSelected = jQuery("#category_select")
      .find(":selected")
      .val();
    let formatOptionSelected = jQuery("#format_select").find(":selected").val();
    let filterByOptionSelected = jQuery(
      "#filter_by_select option:selected"
    ).val();
    console.log(categoryOptionSelected);
    console.log(formatOptionSelected);
    console.log(filterByOptionSelected);
    jQuery.ajax({
      type: "POST",
      dataType: "html",
      url: "./wp-admin/admin-ajax.php",
      data: {
        paged: currentPage,
        action: "filter_photos",
        categoryOptionSelected: categoryOptionSelected,
        formatOptionSelected: formatOptionSelected,
        filterByOptionSelected: filterByOptionSelected,
      },
      success: function (responseFilters) {
        listPhotosHome.html(responseFilters);
      },
    });
  });
});
