const messageTip=document.querySelector(".message-tip");
const messageSlider=document.querySelector(".message-slider");
//
messageTip.addEventListener("click", function() {
   // var tipWidthDeltaSliderWidth=messageTip.clientWidth-messageSlider.clientWidth;
   // var messageMarginS = window.getComputedStyle(messageTip, null).getPropertyValue('margin-left');
   // var messageMarginD=Number(messageMarginS.slice(0, -2))*2;
   // var windowInnerW=window.innerWidth;
   // var messageMaxW=windowInnerW-messageMarginD-tipWidthDeltaSliderWidth;
   this.classList.toggle("closed");
   // messageSlider.style.maxWidth=messageSlider.style.maxWidth!=="0px"?"0px":messageMaxW+"px";
});
//
// messageSlider.style.height=messageSlider.scrollHeight+"px";
// messageTip.classList.toggle("closed");
// messageSlider.style.maxWidth="0px";
