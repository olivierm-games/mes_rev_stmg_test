const optionals=document.getElementsByClassName('optional');
const optionalsCount=optionals.length;
for(var i=0;i<optionalsCount;i++) {
   // console.log("optionals["+i+"]: "+optionals[i]);
   const iFinal=i;
   const header=optionals[i].firstElementChild;
   const body=optionals[i].lastElementChild;
   // console.log("header: "+header);
   // console.log("body: "+body);
   header.addEventListener('click', function() {
      this.classList.toggle('closed');
      if(body.style.maxHeight) body.style.maxHeight=null;
      else body.style.maxHeight=body.scrollHeight+"px";
   });
}
