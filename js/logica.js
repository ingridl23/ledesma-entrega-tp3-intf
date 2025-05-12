
document.addEventListener("DOMContentLoaded", () => {
    const btnMenu = document.querySelector(".btn_menu");
    const menuList = document.querySelector(".lista-container-nav");

    btnMenu.addEventListener("click", () => {
      menuList.classList.toggle("show");
    });
  });