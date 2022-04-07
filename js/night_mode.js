const ICONS_CODE_POINT=["&#xe51c;", "&#xe518;"]; // moon, sun
const ICONS_TITLE=["sombre", "clair"]; // Passer en mode ...
const STORAGE_KEYS=["day", "night"]; // storage key

let storedNightMode=null;
/** by default 1 for day mode; 0 is night mode. Updated after toggling UI and eventually after storage*/
let nightModeIndex=1;

window.onload=function() {
   storedNightMode=localStorage.getItem("night-mode");
   // console.log("onload, stored: "+storedNightMode);
}

function initNightMode() {
   // console.log("initNightMode, stored: "+storedNightMode);
   // storedNightMode=localStorage.getItem("night-mode");
   const matchMedia=window.matchMedia;
   if(storedNightMode!==null) {
      if(storedNightMode==="night") {
         console.log("saved night, toggling. Shouldn't if refreshing?");
         toggleNightMode(); // since by default night mode is off (day on)
      } else console.log("saved light");
   } else if(matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      // console.log("match night media");
      toggleNightMode();
   }
   if(matchMedia) window.matchMedia("(prefers-color-scheme: dark)").addListener(e => toggleNightMode());
}

function onToggleNightMode() {
   saveInLocalStorage();
   toggleNightMode();
}

function toggleNightMode() {
   // console.log("toggleNightMode");
   toggleNightModeBtn();
   toggleNightModeClasses();
   updateIndex();
}

function saveInLocalStorage() {
   // console.log("saveInLocalStorage, storing: "+STORAGE_KEYS[nightModeIndex]);
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
