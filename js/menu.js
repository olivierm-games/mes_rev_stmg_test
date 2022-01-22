// function onMenu(container) {
//   container.classList.toggle("anim-menu");
//   if(container.classList.contains("anim-menu")) {
//     document.getElementById("side-nav").style.right="0";
//     // console.log("100%");
//     // promt("100%");
//   } else {
//     document.getElementById("side-nav").style.right="100%";
//     // console.log("0");
//     // prompt("0");
//   }
// }
let isSideNaveOpen=false;

function onMenu() {
  isSideNaveOpen=!isSideNaveOpen;
  if(isSideNaveOpen) {
    document.getElementById("side-nav").style.width="250px";
    if(document.matchMedia('(max-width: 921px)').matches) {
      // phones, portrait tablets. Set background color of main and header to dark. E5DDFF
      document.getElementById("main-page").style.backgroundImage='linearGradient(90deg, #E5DDFF66, #E5DDFF99, #E5DDFFDD)';
    }
  } else {
    document.getElementById("side-nav").style.width="0";
    if(document.matchMedia('(max-width: 921px)').matches) {
      document.getElementById("main-page").style.backgroundImage='#E5DDFF';
    }
  }
}
