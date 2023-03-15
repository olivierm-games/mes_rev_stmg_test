function setSideNavItemsExpandable() {
   console.log("setSideNavItemsExpandable");
   var collapsibles=[document.getElementsByClassName("collapsible-1ere"), document.getElementsByClassName("collapsible-tle")];
   var coursAllContainers=[collapsibles[0][0].nextElementSibling, collapsibles[1][0].nextElementSibling];
   const collapsiblesCount=collapsibles.length;
   for (var i=0; i < collapsiblesCount; i++) {
      const constI=i, subCollapsiblesCount=collapsibles[i].length;
      for (var j=0; j < subCollapsiblesCount; j++) {
         collapsibles[i][j].addEventListener("click", function() {
            this.classList.toggle("close");
            var container=this.nextElementSibling;
            container.classList.toggle("close");
            if(container.style.maxHeight) {
               container.style.maxHeight=null;
            } else {
               container.style.maxHeight=container.scrollHeight+"px";
               if(!this.classList.contains("side-nav-lvl-0-link")) {
                  coursAllContainerMaxHeights[constI]+=container.scrollHeight;
                  coursAllContainers[constI].style.maxHeight=coursAllContainerMaxHeights[constI]+"px";
               }
            }
         });
      }
   }
   var coursAllContainerMaxHeights=[coursAllContainers[0].scrollHeight, coursAllContainers[1].scrollHeight];
   coursAllContainers[0].style.maxHeight=coursAllContainerMaxHeights[0]+"px";
   coursAllContainers[1].style.maxHeight=coursAllContainerMaxHeights[1]+"px";
   console.log("setSideNavItemsExpandable end");
}
