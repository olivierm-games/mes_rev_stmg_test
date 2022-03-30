function initNightMode() {
   if(window.matchMedia) {
      window.matchMedia("(prefers-color-scheme: dark)").addListener(e => {
         if(e.matches) toggleNightMode("&#xe518;", "clair");
         else toggleNightMode("&#xe51c;", "sombre");
      });
      if(window.matchMedia('(prefers-color-scheme: dark)').matches) toggleNightMode("&#xe518;", "clair");
   }
}

function toggleNightModeClasses() {
   const elements=document.getElementsByClassName("night-mode-element");
   i=elements.length;
   for(j=0;j<i;j++) elements[j].classList.toggle("night-mode");
}

function toggleNightModeBtn(innerHTML, title) {
   const nightModeBtn=document.getElementById("night-mode");
   nightModeBtn.innerHTML=innerHTML;
   nightModeBtn.title="Passer en mode "+title;
}

function toggleNightMode(innerHTML, title) {
   toggleNightModeClasses();
   toggleNightModeBtn(innerHTML, title);
}
