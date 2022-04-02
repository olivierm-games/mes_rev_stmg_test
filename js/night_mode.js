const ICONS_CODE_POINT=["&#xe51c;", "&#xe518;"];
const ICONS_TITLE=["sombre", "clair"];
let storedNightMode=null;
let x=0;

window.onload=function() {
   // localStorage.removeItem("night-mode");
   storedNightMode=localStorage.getItem("night-mode");
   console.log(storedNightMode);
}

function initNightMode() {
   console.log("initNightMode: "+storedNightMode+", CP0: "+ICONS_CODE_POINT[0]);
   if(storedNightMode!==null) {
      if(storedNightMode==="night") toggleNightMode(); // since by default, night mode is off (day on)
   } else if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) toggleNightMode();

   window.matchMedia("(prefers-color-scheme: dark)").addListener(e => {
      toggleNightMode();
      saveInLocalStorage();
   });
}

function toggleNightMode() {
   toggleNightModeBtn(toggleStoredNightMode());
   toggleNightModeClasses();
}

function toggleStoredNightMode() {
   switch (storedNightMode) {
      case "day":
         storedNightMode="night";
         return 1;
      case "night":
         storedNightMode="day";
         return 0;
      default:
         var result=(x++)%2;
         console.log(result);
         return result;
   }
}

function saveInLocalStorage() {
   localStorage.setItem("night-mode", storedNightMode);
}

function toggleNightModeClasses() {
   const elements=document.getElementsByClassName("night-mode-element");
   i=elements.length;
   for(j=0;j<i;j++) elements[j].classList.toggle("night-mode");
}

function toggleNightModeBtn(index) {
   const nightModeBtn=document.getElementById("night-mode");
   console.log("i: "+index+", CP: "+ICONS_CODE_POINT[index]+", T: "+ICONS_TITLE[index]);
   nightModeBtn.innerHTML=ICONS_CODE_POINT[index];
   nightModeBtn.title="Passer en mode "+ICONS_TITLE[index];
}

// function toggleNightModeBtn(innerHTML, title) {
//    const nightModeBtn=document.getElementById("night-mode");
//    nightModeBtn.innerHTML=innerHTML;
//    nightModeBtn.title="Passer en mode "+title;
// }

// function toggleNightMode(innerHTML, title) {
//    toggleNightModeClasses();
//    toggleNightModeBtn(innerHTML, title);
// }

// function toggleNightMode(night, persist) {
//    toggleNightModeClasses(night);
//    if(night) toggleNightModeBtn("&#xe518;", "clair");
//    else toggleNightModeBtn("&#xe51c;", "sombre");
//    if(persist) {
//       // console.log("persisting: "+storedNightMode);
//       localStorage.setItem("night-mode", night?"true":"false");
//    }
// }
