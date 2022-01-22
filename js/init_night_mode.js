if(window.matchMedia) {


  window.matchMedia("(prefers-color-scheme: dark)").addListener(e => {
    toggleNightModeClasses();
    if(document.getElementById("header").classList.contains("night-mode")) document.getElementById("night-mode").innerHTML="light_mode";
    else document.getElementById("night-mode").innerHTML="dark_mode";
  });


  if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
    toggleNightModeClasses();
    document.getElementById("night-mode").innerHTML="light_mode";
  }
}

function toggleNightModeClasses() {
  const elements=document.getElementsByClassName("night-mode-element");
    i=elements.length;
    for(j=0;j<i;j++) {
      elements[j].classList.toggle("night-mode");
    }
}
