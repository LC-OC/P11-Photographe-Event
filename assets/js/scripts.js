// modale

const modaleContactLink = document.querySelector(".contact-modale");
const modaleContainer = document.querySelector("#modale_contact");
let lightbox = document.querySelector("#lightbox_container");

var buttonLoadMore = jQuery("#button_load_more_container");
var listPhotosHome = jQuery("#photo_list_home");
var iconExpend = jQuery(".icon_expand_background");
var iconCloseLightbox = jQuery(".fa-xmark");
var previousLink = jQuery(".previous_link");
var previousImgNav = jQuery(".photo_prev_nav");
var nextLink = jQuery(".next_link");
var nextImgNav = jQuery(".photo_next_nav");

let selectCategory = jQuery("#category_select");

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
let currentPage = 1;
buttonLoadMore.on("click", function () {
  currentPage++;

  jQuery.ajax({
    type: "POST",
    url: "./wp-admin/admin-ajax.php",
    dataType: "json",
    data: {
      action: "weichie_load_more",
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

// Lightbox

iconExpend.click(function () {
  lightbox.classList.toggle("overlay_lightbox");
});

iconCloseLightbox.click(function () {
  lightbox.classList.remove("overlay_lightbox");
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

selectCategory.change(function () {
  let categoryOptionSelected = jQuery(
    "#category_select option:selected"
  ).text();
  console.log(categoryOptionSelected);
  jQuery.ajax({
    type: "POST",
    dataType: "html",
    url: "./wp-admin/admin-ajax.php",
    data: {
      action: "filter_photos",
      categoryOptionSelected: categoryOptionSelected,
    },
    success: function (res) {
      console.log(res);
      listPhotosHome.html(res);
    },
  });
});

// Lightbox

let previousImgLightbox = jQuery(".previous_link");
let nextImgLightbox = jQuery(".next_link");
let currentImgLightox = jQuery("#img_lightbox");
let currentRefLightbox = jQuery("#ref_photo");
let currentCategoryLightbox = jQuery("#category_photo");
