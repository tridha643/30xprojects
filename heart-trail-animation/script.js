const bodyEl = document.querySelector("body")

bodyEl.addEventListener("mousemove", (event)=>{
    const xPos = event.offsetX;
    const yPos = event.offsetY;
    const spanEl = document.createElement("span");//when u click on the screen a new span is made 
    spanEl.style.left  = xPos + "px";
    spanEl.style.top = yPos + "px"; 
    const size = Math.random()*100;
    spanEl.style.width = size + "px";
    spanEl.style.height = size + "px";
    bodyEl.appendChild(spanEl);// this span is added to the html body tag.
    setTimeout(()=>{
        spanEl.remove();
    }, 3000);//removes additional heart spans for 3sec - 3000 given as a parameter
})

