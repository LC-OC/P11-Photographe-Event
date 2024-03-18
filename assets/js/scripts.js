// modale

const modaleContactLink = document.querySelector(".contact-modale");
const modaleContainer = document.querySelector("#modale_contact");
let lightbox = document.querySelector(".lightbox_container");

const buttonLoadMore = jQuery("#button_load_more_container");
const listPhotosHome = jQuery("#photo_list_home");
const iconExpend = jQuery(".icon_expand_background");
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

// button load more home

jQuery(document).ready(function () {
  let currentPage = 1;
  buttonLoadMore.on("click", function () {
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
jQuery(document).ready(function () {
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
        action: "filter_photos",
        categoryOptionSelected: categoryOptionSelected,
        formatOptionSelected: formatOptionSelected,
        filterByOptionSelected: filterByOptionSelected,
      },
      success: function (res) {
        listPhotosHome.html(res);
      },
    });
  });
});

// Lightbox

jQuery(document).ready(function () {
  let previousImgLightbox = jQuery(".previous_lightbox");
  let nextImgLightbox = jQuery(".next_lightbox");
  let currentImgLighbox = jQuery("#img_lightbox");
  let currentRefLightbox = jQuery("#ref_photo");
  let currentCategoryLightbox = jQuery("#category_photo");
  let contentImg = document.querySelectorAll(".photo_galery_container");
  let imgChange = document.querySelector(".img_lightbox");
  let arrayImgLightbox = [];

  for (let img of contentImg) {
    let imgSRC = img.querySelector("img").src;
    arrayImgLightbox.push(imgSRC);
  }

  console.log(arrayImgLightbox);
  let imgLenght = arrayImgLightbox.length;
  console.log(imgLenght);
  let currentIndex = 0;
  iconExpend.click(function () {
    lightbox.classList.toggle("overlay_lightbox");
  });

  iconCloseLightbox.click(function () {
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
    imgChange.src = arrayImgLightbox[currentIndex];
  }

  previousImgLightbox.click(prevImg);
  nextImgLightbox.click(nextImg);
});

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
