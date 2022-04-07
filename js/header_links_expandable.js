function setHeaderLinksExpandable() {
   const headerLinks=document.getElementsByClassName("header-link");
   const headerLinksCount=headerLinks.length;
   for(i=0;i<headerLinksCount;i++) {
      const j=i;
      headerLinks[i].addEventListener("mouseenter", e => {
         // headerLinks[j].classList.add("hover");
         // TODO: remove if when second expandable is added
         // console.log("entered");
         if(j==0) {
            headerLinksExpandableLayouts[0].style.top="62px";
         }
      });
      headerLinks[i].addEventListener("mouseleave", e => {
         // headerLinks[j].classList.remove("hover");
         if(j==0) {
            // console.log("left. "+headerLinksExpandableLayouts[0].clientHeight);
            headerLinksExpandableLayouts[0].style.top=(62-headerLinksExpandableLayoutsHeights[0])+"px";
         }
      });
   }

   const headerLinksExpandableLayouts=document.getElementsByClassName("header-link-expandable-layout");
   const headerLinksExpandableLayoutsHeights=[null];
   // TODO: update loop when header links are all set and ready
   for (var i = 0; i < 1; i++) {
      headerLinksExpandableLayoutsHeights[i]=headerLinksExpandableLayouts[i].clientHeight;
      headerLinksExpandableLayouts[0].style.top=(62-headerLinksExpandableLayoutsHeights[i])+"px";
   }
}
