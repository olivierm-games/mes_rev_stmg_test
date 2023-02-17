let lastScrollY, currentScrollY;
let ticking=false;
let header=null;
function initHeaderOnScroll() {
   header=document.getElementsByTagName("header")[0];
   document.addEventListener("scroll", onScroll, false);
}
function onScroll() {
   currentScrollY=window.pageYOffset;
   requestTick();
}
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
function pin() {header.style.top="0";}
function unpin() {header.style.top="-64px";}
