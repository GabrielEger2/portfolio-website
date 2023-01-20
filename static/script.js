/* Open and close mobile menu */
const menuMobile = document.querySelector(".menu-mobile");
const body = document.querySelector("body");
menuMobile.addEventListener("click", () => {
  menuMobile.classList.contains("bi-list-ul")
    ? menuMobile.classList.replace("bi-list-ul", "bi-x")
    : menuMobile.classList.replace("bi-x", "bi-list-ul");
  body.classList.toggle("menu-nav-active");
});


/* close mobile menu when a section is selected*/

const navItem = document.querySelectorAll('.nav-item')

navItem.forEach(item => {
  item.addEventListener("click", () => {
    if (body.classList.contains("menu-nav-active")) {
      body.classList.remove("menu-nav-active")
      menuMobile.classList.replace("bi-x", "bi-list-ul");
    }
  })
})


/* Loading and notification for email*/

const btnSend = document.querySelector('#btn-send')
const btnSendLoader = document.querySelector('#btn-send-loader')

btnSend.addEventListener("click", ()=>{
  btnSendLoader.style.display = "block";
  btnSend.style.display = "none"
})

setTimeout(() => {
  document.querySelector('#alert').style.display = 'none';
}, 5000)