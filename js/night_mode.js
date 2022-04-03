const ICONS_CODE_POINT=["&#xe51c;", "&#xe518;"]; // moon, sun
const ICONS_TITLE=["sombre", "clair"]; // Passer en mode ...
const STORAGE_KEYS=["day", "night"]; // storage key

/** by default 1 for day mode; 0 is night mode. Updated after toggling UI and eventually after storage*/
let nightModeIndex=1;

function initNightMode() {
   const storedNightMode=localStorage.getItem("night-mode");
   if(storedNightMode!==null) {
      if(storedNightMode==="night") toggleNightMode(); // since by default night mode is off (day on)
   } else if(!window.matchMedia) return;
   if(window.matchMedia('(prefers-color-scheme: dark)').matches) toggleNightMode();
   window.matchMedia("(prefers-color-scheme: dark)").addListener(e => toggleNightMode());
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

function saveInLocalStorage() {
      console.log("night mode never stored. Night? "+nightModeIndex+": "+STORAGE_KEYS[nightModeIndex]);
      localStorage.setItem("night-mode", STORAGE_KEYS[nightModeIndex]);
}

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
