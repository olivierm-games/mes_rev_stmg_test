const popupTargets=document.getElementsByClassName('popup-target-text');
// const popupTargets=document.getElementsByClassName('popup-target');

const popupContainers=document.getElementsByClassName('popup-container');

const targetsCount=popupTargets.length;

for(var i=0; i<targetsCount; i++) {
   popupTargets[i].addEventListener('mouseenter', function() {toggleShow(this)});
   popupContainers[i].addEventListener('mouseenter', function() {this.classList.add('show');});

   popupTargets[i].addEventListener('mouseleave', function() {toggleShow(this)});
   popupContainers[i].addEventListener('mouseleave', function() {this.classList.remove('show');});

   popupTargets[i].addEventListener('touchstart', function() {toggleShow(this), {passive: true}});
   // popupContainers[i].addEventListener('touchstart', function() {this.classList.add('show');, {passive: true}});

   popupTargets[i].addEventListener('touchend', function() {toggleShow(this), {passive: true}});
   // popupContainers[i].addEventListener('touchend', function() {toggleShow(this), {passive: true}});
}

function toggleShow(target) { target.nextElementSibling.classList.toggle('show'); }
// function toggleShow(target) { target.lastElementChild.classList.toggle('show'); }
