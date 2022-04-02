var storedNightMode=null;
var x=0;
var iconsCode=["&#xe51c;", "&#xe518;"];
var iconsTitle=["sombre", "clair"];

window.onload=function() {
   storedNightMode=localStorage.getItem("night-mode");
   console.log(storedNightMode);
}

function initNightMode() {
   console.log("initNightMode: "+storedNightMode);
   if(storedNightMode!==null) {

      if(storedNightMode==="night") toggleNightMode(); // since by default, night mode is off (day on)

      // if(storedNightMode==="true") toggleNightMode(true, false);
      // else toggleNightMode(false, false);
   } else if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) toggleNightMode();

   window.matchMedia("(prefers-color-scheme: dark)").addListener(e => {
      toggleNightMode();
      saveInLocalStorage();
   });
}

function toggleNightMode() {
   toggleNightModeBtn(toggleStoredNightMode());
   // storedNightMode=storedNightMode==="day"?"night":"day"; // not correct if never stored. Can't always be day)
   toggleNightModeClasses();
   toggleNightModeBtn();
}

function toggleStoredNightMode() {
   switch (storedNightMode) {
      case "day":
         storedNightMode="night";
         return 1;
      case "night":
         storedNightMode="day";
         return 0;
      default: return (++x)%2;
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
   nightModeBtn.innerHTML=iconsCode[index];
   nightModeBtn.title="Passer en mode "+iconsTitle[index];
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
