let menu_open = false;
const mobile_nav_bg = document.getElementById("mobile-nav-bg");
const hamburger = document.getElementById("hamburger");
const side_menu = document.getElementById("side-menu");
const shop_menu = document.getElementById("shop-menu");

function toggleSideMenu() {
  if (!menu_open) {
    hamburger.classList.add("open");
    menu_open = true;
    side_menu.style.width = "84%";
    mobile_nav_bg.style.left = "0";
  } else {
    hamburger.classList.remove("open");
    menu_open = false;
    side_menu.style.width = "0";
    mobile_nav_bg.style.left = "100%";
    setTimeout(closeShopMenu, 200);
  }
}

function closeShopMenu() {
  shop_menu.style.left = "100%";
}

function openShopMenu() {
  shop_menu.style.left = "0";
}
