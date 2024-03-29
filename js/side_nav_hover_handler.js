let cours1Ere=coursTer=cours1ereDroit=cours1ereEco=cours1ereMana=coursTerDroit=coursTerEco=coursTerMana=coursSIG=null;
function initSideNavHoverHandler() {
   cours1Ere=document.getElementById("cours-1ere");
   coursTer=document.getElementById("cours-tle");
   cours1ereDroit=document.getElementsByClassName("side-nav-lvl-2-link-0-0");
   cours1ereEco=document.getElementsByClassName("side-nav-lvl-2-link-0-1");
   cours1ereMana=document.getElementsByClassName("side-nav-lvl-2-link-0-2");
   coursTerDroit=document.getElementsByClassName("side-nav-lvl-2-link-1-0");
   coursTerEco=document.getElementsByClassName("side-nav-lvl-2-link-1-1");
   coursTerMana=document.getElementsByClassName("side-nav-lvl-2-link-1-2");
   coursSIG=document.getElementsByClassName("side-nav-lvl-2-link-1-3");
   setParentHoverState(document.getElementsByClassName("side-nav-lvl-1-link-0"), cours1Ere);
   setParentHoverState(document.getElementsByClassName("side-nav-lvl-1-link-1"), coursTer);
   setAllParentsHoverState(cours1ereDroit, document.getElementById("cours-1ere-droit"), cours1Ere);
   setAllParentsHoverState(cours1ereEco, document.getElementById("cours-1ere-eco"), cours1Ere);
   setAllParentsHoverState(cours1ereMana, document.getElementById("cours-1ere-mana"), cours1Ere);
   setAllParentsHoverState(coursTerDroit, document.getElementById("cours-tle-droit"), coursTer);
   setAllParentsHoverState(coursTerEco, document.getElementById("cours-tle-eco"), coursTer);
   setAllParentsHoverState(coursTerMana, document.getElementById("cours-tle-mana"), coursTer);
   setAllParentsHoverState(coursSIG, document.getElementById("cours-sig"), coursTer);
}
function setParentHoverState(targets, parent) {
   const targetsCount=targets.length;
   for (var i=0; i < targetsCount; i++) {
      targets[i].addEventListener("mouseenter", e => parent.classList.add("hover"));
      targets[i].addEventListener("mouseleave", e => parent.classList.remove("hover"));
   }
}
function setAllParentsHoverState(targets, parent, grandParent) {
   const targetsCount=targets.length;
   for (var i=0; i < targetsCount; i++) {
      const j=i;
      targets[i].addEventListener("mouseenter", e => {
         parent.classList.add("hover");
         grandParent.classList.add("hover");
      });
      targets[i].addEventListener("mouseleave", e => {
         parent.classList.remove("hover");
         grandParent.classList.remove("hover");
      });
   }
}
