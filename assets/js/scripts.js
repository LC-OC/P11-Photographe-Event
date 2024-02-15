// modale

const modaleContactLink = document.querySelector(".contact-modale");
console.log(modaleContactLink);
const modaleContainer = document.querySelector("#modale_contact");
console.log(modaleContainer);
modaleContactLink.addEventListener("click", function openModale() {
  modaleContainer.classList.toggle("overlay");
});
