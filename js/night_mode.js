const ICONS_CODE=["dark_mode", "light_mode"], ICONS_TITLE=["sombre", "clair"], STORAGE_KEYS=["day", "night"];
let storedNightMode=null;
let nightModeI=1;
function initNightMode() {
   console.log("initNightMode");
   if(storedNightMode===null) storedNightMode=localStorage.getItem("night-mode");
   const matchMedia=window.matchMedia;
   if(storedNightMode!==null) {
      if(storedNightMode==="night") toggleNightMode();
   } else if(matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) toggleNightMode();
   if(matchMedia) window.matchMedia("(prefers-color-scheme: dark)").addListener(e => toggleNightMode());
   console.log("initNightMode end");
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
function saveInLocalStorage() {localStorage.setItem("night-mode", STORAGE_KEYS[nightModeI]);}
function toggleNightModeClasses() {
   const e=document.getElementsByClassName("night-mode-element");
   const eCount=e.length;
   for(j=0;j<eCount;j++) e[j].classList.toggle("night-mode");
}
function toggleNightModeBtn() {
   const nightModeBtn=document.getElementById("night-mode");
   nightModeBtn.innerHTML=ICONS_CODE[nightModeI];
   nightModeBtn.title="Passer en mode "+ICONS_TITLE[nightModeI];
}
function updateIndex() {nightModeI=nightModeI==1?0:1;}
