function onClickMainPageOrHeader(element) {
   var sideNav=document.getElementsByTagName("aside")[0];
   var isSideNavOpen=sideNav.classList.contains("open");
   if(sideNav.classList.contains("just-opened")) toggleJustOpened(); // in menu.js
   else if(sideNav.classList.contains("open") && element.tagName!=="aside") onPhoneMenu(false);
}
