 console.log("hello");
 const f=document.querySelector(".addtodo");
 const ele=document.querySelector(".addtodo input[type='submit']");
const text=document.querySelector(".addtodo input[type='text']");
const parent=document.querySelector(".todo-list");
f.addEventListener("submit",(e)=>{
    e.preventDefault();
     const newtext=text.value;
     if(!newtext){
        e.preventDefault();
        alert("please enter your plan");
        return;
     }
       const newli=document.createElement("li");
       newli.innerHTML=`<span class="text">${newtext}</span>
       <div class="to-buttons">
           <button class="todo-btn done ">Done</button>
           <button class="todo-btn remove ">Remove</button>
       </div>`;
       parent.appendChild(newli);
       text.value=null;
})
parent.addEventListener("click",(e)=>{
    if(e.target.classList.contains("remove")){
       const toremove=e.target.parentNode.parentNode;
       toremove.remove();
    }
    if(e.target.classList.contains("done")){
        const tocross=e.target.parentNode.previousElementSibling;
        tocross.style.textDecoration="line-through";
     }
})