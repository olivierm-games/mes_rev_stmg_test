function onMenu(container) {
  container.classList.toggle("anim-menu");
  if(container.classList.contains("anim-menu")) {
    document.getElementById("side-nav").style.right="0";
    // console.log("100%");
    // promt("100%");
  } else {
    document.getElementById("side-nav").style.right="100%";
    // console.log("0");
    // prompt("0");
  }
}

// function onMenu() {
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
