let allContainer, fab=null;

let maxFabY=0;

function setFabBackToTop() {
   allContainer=document.getElementById('all-container');
   fab=document.getElementById('fab-back-to-top');

   maxFabY=allContainer.offsetHeight-window.innerHeight-86;

   window.addEventListener(
      'scroll',
      () => styleFab(document.documentElement.scrollTop),
      { passive: true }
   );
   styleFab(0);
}

function styleFab(scrollTop) {
   fab.style.opacity=Math.min(.7, (scrollTop-100)/100);
   fab.style.bottom=Math.max(86, scrollTop-maxFabY)+"px";
}
