includeHTML();

function includeHTML() {
   var elements=document.getElementsByTagName("*");
   var size=elements.length;
   for (i = 0; i < size; i++) {
      var file=elements[i].getAttribute("w3-include-html");
      if(file) {
         const j=i;
         var xhttp=new XMLHttpRequest();
         xhttp.onreadystatechange=function () {
            if(this.readyState==4) {
               if(this.status==200) { elements[j].innerHTML=this.responseText; }
               else if(this.status==404) { elements[j].innerHTML="Page non trouvée."; }
               elements[j].removeAttribute("w3-include-html");
               includeHTML();
            }
         }
         xhttp.open("GET", file, true);
         xhttp.send();
         return;
      }
   }
}
