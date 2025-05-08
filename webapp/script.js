const MenuBtn = document.querySelector(".menu-btn")
const NavBtn = document.querySelector(".nav-lists")
MenuBtn.addEventListener("click" , ()=> {
    NavBtn.classList.toggle("active")
})