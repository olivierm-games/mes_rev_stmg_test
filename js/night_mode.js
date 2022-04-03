const ICONS_CODE_POINT=["&#xe51c;", "&#xe518;"]; // moon, sun
const ICONS_TITLE=["sombre", "clair"]; // Passer en mode ...
const STORAGE_KEYS=["day", "night"]; // storage key

let storedNightMode=null;
/** by default 1 for day mode; 0 is night mode. Updated after toggling UI and eventually after storage*/
let nightModeIndex=1;

window.onload=function() {
   storedNightMode=localStorage.getItem("night-mode");
   const matchMedia=window.matchMedia;
   console.log(storedNightMode);
   if(storedNightMode!==null) {
      if(storedNightMode==="night") toggleNightMode(); // since by default night mode is off (day on)
   } else if(matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) toggleNightMode();
   if(matchMedia) window.matchMedia("(prefers-color-scheme: dark)").addListener(e => toggleNightMode());
}

function onToggleNightMode() {
   saveInLocalStorage();
   toggleNightMode();
}

function toggleNightMode() {
   toggleNightModeBtn();
   toggleNightModeClasses();
   updateIndex();
}

function saveInLocalStorage() { localStorage.setItem("night-mode", STORAGE_KEYS[nightModeIndex]); }

function toggleNightModeClasses() {
   const elements=document.getElementsByClassName("night-mode-element");
   var elementsCount=elements.length;
   for(j=0;j<elementsCount;j++) elements[j].classList.toggle("night-mode");
}

function toggleNightModeBtn() {
   const nightModeBtn=document.getElementById("night-mode");
   nightModeBtn.innerHTML=ICONS_CODE_POINT[nightModeIndex];
   nightModeBtn.title="Passer en mode "+ICONS_TITLE[nightModeIndex];
}

function updateIndex() { nightModeIndex=nightModeIndex==1?0:1; }
