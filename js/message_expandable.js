var message=document.querySelector(".message-tip");
var collapsibleText=document.querySelector(".message-slider");
message.addEventListener("click", function() {
   this.classList.toggle("closed");
   collapsibleText.style.maxWidth=collapsibleText.style.maxWidth?null:collapsibleText.scrollWidth+"px";
});
