let sideNav=null;
function initSideNavCollapseHandle() {
   sideNav=document.getElementsByTagName("aside")[0];
   sideNav.addEventListener('click', e => e.stopPropagation());
   document.addEventListener('click', function(e) {
      e=e || window.event;
      var target=e.target || e.srcElement, isSideNavOpen=sideNav.classList.contains('open');
      if(target.id==='menu-svg' || target.tagName==='aside' || !isSideNavOpen) return;
      onMenu();
   }, false);
}
