function onToggleNightMode() {
    var elements=document.getElementsByClassName("night-mode-element");
    i=elements.length;
    // console.log("toggle, "+i+" elements");
    for(j=0;j<i;j++) {
      elements[j].classList.toggle("night-mode");
    }
    if(elements[i-1].classList.contains("night-mode")) {
      // console.log("toggle to night");
      document.getElementById("night-mode").innerHTML="light_mode";
    } else {
      // console.log("toggle to light");
      document.getElementById("night-mode").innerHTML="dark_mode";
    }
}
