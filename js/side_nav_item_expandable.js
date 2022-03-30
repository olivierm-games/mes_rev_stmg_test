var collapsibles=[document.getElementsByClassName("collapsible-1ere"), document.getElementsByClassName("collapsible-ter")];
var coursAllContainers=[collapsibles[0][0].nextElementSibling, collapsibles[1][0].nextElementSibling];

for (var i = 0; i < collapsibles.length; i++) {
   const constI=i;
   for (var j = 0; j < collapsibles[i].length; j++) {
      // console.log(collapsibles[i][j].id);
      collapsibles[i][j].addEventListener("click", function() {
         this.classList.toggle("close");
         var container=this.nextElementSibling;
         container.classList.toggle("close");
         if(container.style.maxHeight) { // collapse
            container.style.maxHeight=null;


                        for(var i=0; i<3; i++) {
                           for(var j=0; j<3; j++) {
                              var level2s=document.getElementsByClassName("side-nav-lvl-2-link-"+i+"-"+j);
                              var level2sLength=level2s.length;
                              console.log(i+"-"+j+": "+level2sLength);
                              for(k=0; k<level2sLength; k++) {
                                 level2s[k].style.borderRight="15px solid transparent";
                              }
                           }
                        }


         } else { // expand
            container.style.maxHeight=container.scrollHeight+"px";


            for(var i=0; i<3; i++) {
               for(var j=0; j<3; j++) {
                  var level2s=document.getElementsByClassName("side-nav-lvl-2-link-"+i+"-"+j);
                  var level2sLength=level2s.length;
                  console.log(i+"-"+j+": "+level2sLength);
                  for(k=0; k<level2sLength; k++) {
                     level2s[k].style.borderRight="0px solid transparent";
                  }
               }
            }


            if(!this.classList.contains("side-nav-lvl-0-link")) { // lvl 1 collapsible (not cours1ere/Ter)
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
