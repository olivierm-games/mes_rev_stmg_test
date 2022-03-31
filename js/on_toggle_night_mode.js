function onToggleNightMode() {
   if(!document.getElementsByClassName("night-mode-element")[0].classList.contains("night-mode")) toggleNightMode(true, true);
   // if(!document.getElementsByClassName("night-mode-element")[0].classList.contains("night-mode")) toggleNightMode("&#xe518;", "clair");
   else toggleNightMode(false, true);
   // else toggleNightMode("&#xe51c;", "sombre");
}
