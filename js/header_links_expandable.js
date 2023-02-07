function setHeaderLinksExpandable() {
   const headerLinks=document.getElementsByClassName("header-link");
   const headerLinksCount=headerLinks.length;
   for(i=0;i<headerLinksCount;i++) {
      const j=i;
      headerLinks[i].addEventListener("mouseenter", e => {
         // console.log("entered");
         // if(j==0) {
            headerLinksExpandableLayouts[j].style.top="62px";
         // }
      });
      headerLinks[i].addEventListener("mouseleave", e => {
         // if(j==0) {
            // console.log("left. "+headerLinksExpandableLayouts[0].clientHeight);
            headerLinksExpandableLayouts[j].style.top=(62-headerLinksExpandableLayoutsHeights[j])+"px";
         // }
      });
   }

   const headerLinksExpandableLayouts=document.getElementsByClassName("header-link-expandable-layout");
   const headerLinksExpandableLayoutsHeights=[null];
   // TODO: update loop when header links are all set and ready
   for (var i = 0; i < 2; i++) {
      headerLinksExpandableLayoutsHeights[i]=headerLinksExpandableLayouts[i].clientHeight;
      // console.log("Expand layout ["+i+"] height: "+headerLinksExpandableLayoutsHeights[i]);
      headerLinksExpandableLayouts[i].style.top=(62-headerLinksExpandableLayoutsHeights[i])+"px";
   }
}
