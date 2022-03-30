function setHeaderLinksHref(href) {
   var links=document.getElementsByTagName("a");
   var linksCount=links.length;
   for(i=0;i<linksCount; i++) {
      let concat=href.concat("", links[i].href);
      links[i].href=concat;
   }
}
waitForElm('#night-mode').then((elm) => {
   initNightMode();
   setHeaderLinksHref();
});
