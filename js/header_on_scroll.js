var lastScrollY, currentScrollY;
var ticking=false;
var header=null;

window.onload=function() {
   header=document.getElementsByTagName("header")[0];
   document.addEventListener("scroll", onScroll, false);
}

function onScroll() {
   currentScrollY=window.pageYOffset;
   requestTick();
}

// "debouncing" request to animation frame
function requestTick() {
   if(!ticking) {
      requestAnimationFrame(update);
      ticking=true;
   }
}

function update() {
   if(lastScrollY-currentScrollY>5) pin();
   else if(lastScrollY-currentScrollY<-5) unpin();
   lastScrollY=currentScrollY;
   ticking=false;
}

function pin() { if(!header.classList.contains("show")) header.classList.toggle("show"); }
function unpin() { if(header.classList.contains("show")) header.classList.toggle("show"); }
