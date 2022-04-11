let allContainer=null;
let fab=null;

function setFabBackToTop() {
   allContainer=document.getElementById("all-container");
   fab=document.getElementById("fab-back-to-top");
}

window.onscroll=function() {
   // if(allContainer.scrollTop>100) {
      fab.style.opacity=(document.documentElement.scrollTop-100)/100;
   // }
}
