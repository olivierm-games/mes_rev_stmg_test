let allContainer=null;
let fab=null;
let docElmScrollTop=0, allContainerHeight=0, windowHeight=0;

function setFabBackToTop() {
   allContainer=document.getElementById("all-container");
   fab=document.getElementById("fab-back-to-top");
   allContainerHeight=allContainer.offsetHeight;
   windowHeight=window.innerHeight;
}

window.onscroll=function() {
   var docElmScrollTop=document.documentElement.scrollTop;
   // var scrollTop=document.documentElement.scrollTop;
   // console.log("docElmScrollTop: "+docElmScrollTop);
   fab.style.opacity=Math.min(.9, (docElmScrollTop-100)/100);
   // clientHeight, scrollTop
   // var allContainerHeight=allContainer.offsetHeight;
   // var windowHeight=window.innerHeight;
   // console.log("allContainerHeight: "+allContainerHeight);
   // console.log("windowHeight: "+windowHeight);

   fab.style.bottom=Math.max(48, docElmScrollTop-(allContainerHeight-windowHeight-148))+"px";

   // var fabBottom=Math.max(48, docElmScrollTop-(allContainerHeight-windowHeight-148));
   // console.log("fabBottom: "+(docElmScrollTop-(allContainerHeight-windowHeight-148)));
   // fab.style.bottom=fabBottom+"px";
}
