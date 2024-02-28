// modale

const modaleContactLink = document.querySelector(".contact-modale");
const modaleContainer = document.querySelector("#modale_contact");

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
jQuery("#button_load_more_container").on("click", function () {
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
        jQuery("#button_load_more_container").hide();
      }
      jQuery("#photo_list_home").append(res.html);
    },
  });
});

// Lightbox
let lightbox = document.querySelector("#lightbox_container");

jQuery(".icon_expand_background").click(function () {
  lightbox.classList.toggle("overlay_lightbox");
});

jQuery(".fa-xmark").click(function () {
  lightbox.classList.remove("overlay_lightbox");
});
