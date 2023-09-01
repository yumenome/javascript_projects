const note_conTAG = document.querySelector(".note_container");
const btnTAG = document.querySelector("button");

show_data = () =>{
    note_conTAG.innerHTML = localStorage.getItem("notes");
}
show_data();

update_data = () =>{
    localStorage.setItem("notes", note_conTAG.innerHTML);
}
let botTAG;
let id = 0;
btnTAG.onclick = () =>{
    id ++;

    let inputTAG = document.createElement("p");
    let img = document.createElement("img");
    inputTAG.className="input_box";
    inputTAG.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    // botTAG = document.createElement("div");

    // botTAG.appendChild(inputTAG).appendChild(img);
    note_conTAG.appendChild(inputTAG).appendChild(img);
}
note_conTAG.addEventListener("click", (e) =>{
    if(e.target.tagName == "IMG"){
        e.target.parentElement.remove();
        update_data();
    }
    else if(e.target.tagName === "P"){
        const notes =document.querySelectorAll(".input_box");
        notes.forEach(n =>{
            n.onkeydown = () => update_data(); 
        })
    }
})
document.addEventListener("keydown", (e) =>{
    if(e.key === "Enter"){
        document.execCommand("insertLineBreak");
        e.preventDefault();
    }
})