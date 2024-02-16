// modale

const modaleContactLink = document.querySelector(".contact-modale");
const modaleContainer = document.querySelector("#modale_contact");

function openModale() {
  modaleContainer.classList.toggle("overlay");
}

jQuery(".contact-modale").click(openModale);

jQuery("#contact_photo").click(function () {
  openModale();
  jQuery("input[name=your-ref-photo]").val(jQuery("#ref_value").text());
});
