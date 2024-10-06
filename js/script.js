const mobile_menu = document.querySelector(".mobile-menu");
const nav_menu = document.querySelector(".nav-menu");

mobile_menu.addEventListener("click", () => {
  mobile_menu.classList.toggle("active");
  nav_menu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  mobile_menu.classList.remove("active"); 
  nav_menu.classList.remove("active");
}))