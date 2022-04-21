// function onDesktopMenu() {
//    document.getElementsByTagName("aside")[0].classList.toggle("open");
//    document.getElementById("menu-svg").classList.toggle("anim");
//    document.getElementsByTagName("main")[0].classList.toggle("open");
// }
//
// function toggleJustOpened() { document.getElementsByTagName("aside")[0].classList.toggle("just-opened"); }
//
// function onPhoneMenu(toggleJustOpened) {
//    onDesktopMenu();
//    if(toggleJustOpened) document.getElementsByTagName("aside")[0].classList.toggle("just-opened");
// }

function onMenu() {
   // console.log("onMenu");
   // document.getElementsByTagName("aside")[0].classList.toggle("open");
   // document.getElementById("menu-svg").classList.toggle("anim");
   // document.getElementsByTagName("main")[0].classList.toggle("open");
   requestMenuTick();
}



let menuTicking=false;
// "debouncing" request to animation frame
function requestMenuTick() {
   if(!menuTicking) {
      requestAnimationFrame(updateMenu);
      menuTicking=true;
   }
}

function updateMenu() {
   toggleMenuClasses();
   // if(lastScrollY-currentScrollY>5) pin();
   // else if(lastScrollY-currentScrollY<-5) unpin();
   // lastScrollY=currentScrollY;
   menuTicking=false;
}

function toggleMenuClasses() {
   document.getElementsByTagName("aside")[0].classList.toggle("open");
   document.getElementById("menu-svg").classList.toggle("anim");
   document.getElementsByTagName("main")[0].classList.toggle("open");
}
