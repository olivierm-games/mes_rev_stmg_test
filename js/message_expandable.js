const messageTip=document.querySelector(".message-tip");
// const messageSlider=document.querySelector(".message-slider");

messageTip.addEventListener("click", function() {
   this.classList.toggle("closed");
});
