let menuTicking=false;
function onMenu() {requestMenuTick();}
function requestMenuTick() {
   if(!menuTicking) {
      requestAnimationFrame(updateMenu);
      menuTicking=true;
   }
}
function updateMenu() {
   toggleMenuClasses();
   menuTicking=false;
}
function toggleMenuClasses() {
   document.getElementsByTagName("aside")[0].classList.toggle("open");
   document.getElementById("menu-svg").classList.toggle("anim");
   document.getElementsByTagName("main")[0].classList.toggle("open");
}
