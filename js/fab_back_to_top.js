let allContainer=null;
let fab=null;
// let docElmScrollTop=0,
// let allContainerHeight=0, windowHeight=0;

let maxFabY=0;

function setFabBackToTop() {
   allContainer=document.getElementById('all-container');
   fab=document.getElementById('fab-back-to-top');
   // allContainerHeight=allContainer.offsetHeight;
   // windowHeight=window.innerHeight;

   maxFabY=allContainer.offsetHeight-window.innerHeight-148;

   window.addEventListener(
      'scroll',
      () => styleFab(document.documentElement.scrollTop),
      { passive: true }
   );
   styleFab(0);
}

function styleFab(scrollTop) {
   // var docElmScrollTop=document.documentElement.scrollTop;
   fab.style.opacity=Math.min(.7, (scrollTop-100)/100);
   fab.style.bottom=Math.max(48, scrollTop-maxFabY)+"px";
   // fab.style.bottom=Math.max(48, scrollTop-(allContainerHeight-windowHeight-148))+"px";
}
