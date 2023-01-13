/* Open and close mobile menu */
const menuMobile = document.querySelector(".menu-mobile");
const body = document.querySelector("body");
menuMobile.addEventListener("click", () => {
  menuMobile.classList.contains("bi-list")
  body.classList.toggle("menu-nav-active");
});


/* close mobile menu when a section is selected*/

const navItem = document.querySelectorAll('.nav-item')

navItem.forEach(item => {
  item.addEventListener("click", () => {
    if (body.classList.contains("menu-nav-active")) {
      body.classList.remove("menu-nav-active")
    }
  })
})