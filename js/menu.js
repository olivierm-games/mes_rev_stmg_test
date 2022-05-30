function onMenu() {
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
