let cours1Ere=document.getElementById("cours-1ere");
let coursTer=document.getElementById("cours-ter");



function setParentHoverState(targets, parent) {
   for (var i = 0; i < targets.length; i++) {
      // sets the hover state of cours 1ere when hovering one of its children
      targets[i].addEventListener("mouseenter", e => parent.classList.add("hover"));
      targets[i].addEventListener("mouseleave", e => parent.classList.remove("hover"));
   }
}

// 2 levels to set hover state
function setAllParentsHoverState(targets, parent, grandParent) {
   for (var i = 0; i < targets.length; i++) {
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

setParentHoverState(document.getElementsByClassName("side-nav-lvl-1-link-0"), cours1Ere);
setParentHoverState(document.getElementsByClassName("side-nav-lvl-1-link-1"), coursTer);

const cours1ereDroit=document.getElementsByClassName("side-nav-lvl-2-link-0-0");
const cours1ereEco=document.getElementsByClassName("side-nav-lvl-2-link-0-1");
const cours1ereMana=document.getElementsByClassName("side-nav-lvl-2-link-0-2");
setAllParentsHoverState(cours1ereDroit, document.getElementById("cours-1ere-droit"), cours1Ere);
setAllParentsHoverState(cours1ereEco, document.getElementById("cours-1ere-eco"), cours1Ere);
setAllParentsHoverState(cours1ereMana, document.getElementById("cours-1ere-mana"), cours1Ere);



const coursTerDroit=document.getElementsByClassName("side-nav-lvl-2-link-1-0");
const coursTerEco=document.getElementsByClassName("side-nav-lvl-2-link-1-1");
const coursTerMana=document.getElementsByClassName("side-nav-lvl-2-link-1-2");
setAllParentsHoverState(coursTerDroit, document.getElementById("cours-ter-droit"), coursTer);
setAllParentsHoverState(coursTerEco, document.getElementById("cours-ter-eco"), coursTer);
setAllParentsHoverState(coursTerMana, document.getElementById("cours-ter-mana"), coursTer);
