const ICONS_CODE_POINT=["&#xe51c;", "&#xe518;"];
const ICONS_TITLE=["sombre", "clair"];
const STORAGE_VALUES=["night", "day"];
let i=1;

function initNightMode() {
   const storedNightMode=localStorage.getItem("night-mode");
   if(storedNightMode!==null) {
      if(storedNightMode==="night") toggleNightMode(); // since by default night mode is off (day on)
   } else if(!window.matchMedia) return;
   if(window.matchMedia('(prefers-color-scheme: dark)').matches) toggleNightMode();
   window.matchMedia("(prefers-color-scheme: dark)").addListener(e => toggleNightMode());
}

function onToggleNightMode() {
   toggleNightMode();
   saveInLocalStorage();
}

function toggleNightMode() {
   toggleNightModeBtn();
   toggleNightModeClasses();
   updateIndex();
}

function saveInLocalStorage() {
      console.log("night mode never stored. Night? "+i+": "+STORAGE_VALUES[i]);
      localStorage.setItem("night-mode", STORAGE_VALUES[i]);
}

function toggleNightModeClasses() {
   const elements=document.getElementsByClassName("night-mode-element");
   i=elements.length;
   for(j=0;j<i;j++) elements[j].classList.toggle("night-mode");
}

function toggleNightModeBtn() {
   const nightModeBtn=document.getElementById("night-mode");
   nightModeBtn.innerHTML=ICONS_CODE_POINT[i];
   nightModeBtn.title="Passer en mode "+ICONS_TITLE[i];
}

function updateIndex() { i=i==1?0:1; }
