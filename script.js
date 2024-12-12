const box = document.querySelector("#box");
const container = document.querySelector("#container");
const button = document.querySelector("button");


button.addEventListener("click",()=>{
   if(box.value==='') alert("You must write something");
   else{
    let li = document.createElement("li");
    li.innerHTML = box.value;
    container.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = " ";
    li.appendChild(span);
    // container.style.justifyContent = "space-between";
    // span.style.marginLeft = "284px";
   }
   box.value = '';
})

container.addEventListener("click",(e)=>{
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    }
})