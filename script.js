const menuButton = document.querySelector(".menu-button")
const menuNavbar =document.querySelector(".menu-navbar")
const sectionCard =document.querySelector(".section-card")
import datacard from "./dataCardProjeck.js" 

menuButton.addEventListener("click", ()=>{
menuNavbar.classList.toggle("active")
})

datacard.forEach(datacard => {
    sectionCard.innerHTML+=`
    <div class="cardList">
    <img src="${datacard.imageUrl}">
    <h4>${datacard.judul}</h4>
    <p>${datacard.deskripsi}</p>
    <button>${datacard.linkUrl}</button>`
})