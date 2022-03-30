function onDesktopMenu() {
   document.getElementsByTagName("aside")[0].classList.toggle("open");
   document.getElementById("menu-svg").classList.toggle("anim");
   document.getElementsByTagName("main")[0].classList.toggle("open");
}

function toggleJustOpened() { document.getElementsByTagName("aside")[0].classList.toggle("just-opened"); }

function onPhoneMenu(toggleJustOpened) {
   onDesktopMenu();
   if(toggleJustOpened) document.getElementsByTagName("aside")[0].classList.toggle("just-opened");
}
