function setHeaderLinksExpandable() {
   const headerLinks=document.getElementsByClassName("header-link");
   const headerLinksCount=headerLinks.length;
   for(i=0;i<headerLinksCount;i++) {
      const j=i;
      headerLinks[i].addEventListener("mouseenter", e => {headerLinksExpandableLayouts[j].style.top="62px";});
      headerLinks[i].addEventListener("mouseleave", e => {headerLinksExpandableLayouts[j].style.top=(62-headerLinksExpandableLayoutsHeights[j])+"px";});
   }
   const headerLinksExpandableLayouts=document.getElementsByClassName("header-link-expandable-layout");
   const headerLinksExpandableLayoutsHeights=[null, null];
   for (var i = 0; i < 2; i++) {
      headerLinksExpandableLayoutsHeights[i]=headerLinksExpandableLayouts[i].clientHeight;
      headerLinksExpandableLayouts[i].style.top=(62-headerLinksExpandableLayoutsHeights[i])+"px";
   }
}
