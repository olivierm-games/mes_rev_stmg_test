var storedNightMode;


window.onload=function() {
   // var item=localStorage.getItem("night-mode");
   storedNightMode=localStorage.getItem("night-mode");
   console.log(storedNightMode);
   // if(item!==null) {
   //    console.log("A night mode preference has been set by the user");
   //    if(localStorage.getItem("night-mode")==="true") toggleNightMode("&#xe518;", "clair");
   //    else toggleNightMode("&#xe51c;", "sombre");
   // }
   // initNightMode();
}





function initNightMode() {


   console.log("initNightMode: "+storedNightMode);
   if(storedNightMode!==null) {
      if(storedNightMode==="true") toggleNightMode(true, false);
      else toggleNightMode(false, false);
   } else if(window.matchMedia) {
      window.matchMedia("(prefers-color-scheme: dark)").addListener(e => {
         // var isNightMode=e.matches;
         // localStorage.setItem("night-mode", isNightMode);
         if(e.matches) toggleNightMode(true, true);
         else toggleNightMode(false, true);
      });
      if(window.matchMedia('(prefers-color-scheme: dark)').matches) toggleNightMode(true, false);
   }


   // var item=localStorage.getItem("night-mode");
   // console.log(item);
   // if(item===null && window.matchMedia) {
   //    window.matchMedia("(prefers-color-scheme: dark)").addListener(e => {
   //       var isNightMode=e.matches;
   //       localStorage.setItem("night-mode", isNightMode);
   //       if(isNightMode) toggleNightMode("&#xe518;", "clair");
   //       else toggleNightMode("&#xe51c;", "sombre");
   //    });
   //    if(window.matchMedia('(prefers-color-scheme: dark)').matches) toggleNightMode("&#xe518;", "clair");
   // }



   // if(window.matchMedia) {
   //    window.matchMedia("(prefers-color-scheme: dark)").addListener(e => {
   //       if(e.matches) toggleNightMode("&#xe518;", "clair");
   //       else toggleNightMode("&#xe51c;", "sombre");
   //    });
   //    if(window.matchMedia('(prefers-color-scheme: dark)').matches) toggleNightMode("&#xe518;", "clair");
   // }
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

// function toggleNightMode(innerHTML, title) {
//    toggleNightModeClasses();
//    toggleNightModeBtn(innerHTML, title);
// }

function toggleNightMode(night, persist) {
   toggleNightModeClasses();
   if(night) toggleNightModeBtn("&#xe518;", "clair");
   else toggleNightModeBtn("&#xe51c;", "sombre");
   if(persist) {
      // console.log("persisting: "+storedNightMode);
      localStorage.setItem("night-mode", night?"true":"false");
   }
}
