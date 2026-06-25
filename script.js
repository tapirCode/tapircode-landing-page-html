const menuButton = document.querySelector(".menu-button")
const menuNavbar =document.querySelector(".menu-navbar")

menuButton.addEventListener("click", ()=>{
menuNavbar.classList.toggle("active")
})