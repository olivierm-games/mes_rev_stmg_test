const popupTargets=document.getElementsByClassName('popup-target');
const targetsCount=popupTargets.length;

for(var i=0; i<targetsCount; i++) {
   popupTargets[i].addEventListener('mouseenter', function() {toggleShow(this)});
   popupTargets[i].addEventListener('mouseleave', function() {toggleShow(this)});
   popupTargets[i].addEventListener('touchstart', function() {toggleShow(this), {passive: true}});
   popupTargets[i].addEventListener('touchend', function() {toggleShow(this), {passive: true}});
}

function toggleShow(target) { target.lastElementChild.classList.toggle('show'); }
