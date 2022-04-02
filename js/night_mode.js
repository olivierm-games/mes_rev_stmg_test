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
   if(storedNightMode!==null) {
      if(storedNightMode==="night") toggleNightMode(); // since by default night mode is off (day on)
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
      return (x++)%2;
   }
}

function saveInLocalStorage() {
   if(storedNightMode===null) {
      console.log("night mode never stored. Night? "+(document.body.classList.contains("night-mode")));
      localStorage.setItem("night-mode", document.body.classList.contains("night-mode")?"night":"day");
   }
   else localStorage.setItem("night-mode", storedNightMode);
}

function toggleNightModeClasses() {
   const elements=document.getElementsByClassName("night-mode-element");
   i=elements.length;
   for(j=0;j<i;j++) elements[j].classList.toggle("night-mode");
}

function toggleNightModeBtn(index) {
   const nightModeBtn=document.getElementById("night-mode");
   nightModeBtn.innerHTML=ICONS_CODE_POINT[index];
   nightModeBtn.title="Passer en mode "+ICONS_TITLE[index];
}
