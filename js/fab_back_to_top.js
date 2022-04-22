let allContainer=null;
let fab=null;
let docElmScrollTop=0, allContainerHeight=0, windowHeight=0;

function setFabBackToTop() {
   allContainer=document.getElementById('all-container');
   fab=document.getElementById('fab-back-to-top');
   allContainerHeight=allContainer.offsetHeight;
   windowHeight=window.innerHeight;
   window.addEventListener(
      'scroll',
      () => styleFab(),
      { passive: true }
   );
   styleFab();
}

// window.onscroll=function() {
// }

function styleFab() {
   var docElmScrollTop=document.documentElement.scrollTop;
   fab.style.opacity=Math.min(.9, (docElmScrollTop-100)/100);
   fab.style.bottom=Math.max(48, docElmScrollTop-(allContainerHeight-windowHeight-148))+"px";
}
