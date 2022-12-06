const table=document.querySelector(".example-tip-content table");
const tableMaxHeight=table.scrollHeight;

console.log(tableMaxHeight);
// table.classList.toggle("borderless");
exampleTip.classList.toggle("closed");

exampleTip.addEventListener("click", function() {
   // console.log(tableMaxHeight);
   // table.classList.toggle("borderless");
   exampleTip.classList.toggle("closed");
   exampleTipContent.style.maxHeight=exampleTipContent.style.maxHeight!=="0px"?"0px":(exampleTipContent.scrollHeight+tableMaxHeight)+"px";
});
exampleTipContent.style.maxHeight="0px";
