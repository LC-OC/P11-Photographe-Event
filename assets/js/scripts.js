// modale

const modaleContactLink = document.querySelector(".contact-modale");
const modaleContainer = document.querySelector("#modale_contact");

function openModale() {
  modaleContainer.classList.toggle("overlay");
}

// close modal when user clicks outside of it
window.addEventListener("click", function (e) {
  if (e.target == modaleContainer) {
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
