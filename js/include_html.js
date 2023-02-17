includeHTML();

function includeHTML() {
   var e=document.getElementsByTagName("*");
   var size=e.length;
   for (i=0; i < size; i++) {
      var file=e[i].getAttribute("w3-include-html");
      if(file) {
         const j=i;
         var xhttp=new XMLHttpRequest();
         xhttp.onreadystatechange=function () {
            if(this.readyState==4) {
               if(this.status==200) {e[j].innerHTML=this.responseText;}
               e[j].removeAttribute("w3-include-html");
               includeHTML();
            }
         }
         xhttp.open("GET", file, true);
         xhttp.send();
         return;
      }
   }
}
