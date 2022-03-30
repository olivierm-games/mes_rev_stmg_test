function setHeaderLinksHref(href) {
   var links=document.getElementsByTagName("a");
   var linksCount=links.length;
   for(i=0;i<linksCount; i++) {
      links[i].href=href+links[i].href;
      console.log(links[i].href);
   }
}
waitForElm('#night-mode').then((elm) => {
   initNightMode();
   setHeaderLinksHref();
});
