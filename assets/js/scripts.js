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
