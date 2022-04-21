let allContainer=null;
let fab=null;

function setFabBackToTop() {
   allContainer=document.getElementById("all-container");
   fab=document.getElementById("fab-back-to-top");
}

window.onscroll=function() {
   var scrollTop=allContainer.scrollTop;
   // var scrollTop=document.documentElement.scrollTop;
   console.log("scrollTop: "+scrollTop);
   fab.style.opacity=(scrollTop-100)/100;
   // clientHeight, scrollTop
   var docHeight=allContainer.offsetHeight;
   console.log("clientHeight: "+docHeight);
   var fabBottom=Math.max(48, scrollTop-docHeight-148);
   fab.style.bottom=fabBottom+"px";
   // if(scrollTop>=(clientHeight-150)) {
   //    fab.style.bottom="px";
   // } else fab.style.bottom="48px";
}
// scrollTop-(clientHeight-150)>0 =>
// 180-(380-150)=180-230=-50<0 => scroll position is higher than the limit
// 280-(380-148)=280-232=48>0 => scroll position is lower than the limit, fab should be at scrollTop-clientHeight-148
