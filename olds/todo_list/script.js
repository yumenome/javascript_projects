const inputBox = document.getElementById("input_box");
const list_contaienr = document.getElementById("list_container");

inputBox.addEventListener("change", () =>{
    add_task();
});

add_task = () =>{

        let li = document.createElement("li");
        li.innerHTML= inputBox.value;
        list_contaienr.appendChild(li);

        let SPAN = document.createElement("span");
        SPAN.innerHTML = "X";
        li.appendChild(SPAN);
        
        inputBox.value= "";
        update_data();
}
list_contaienr.addEventListener("click", (e) =>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        update_data();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        update_data();
    }
})
update_data = () =>{
    localStorage.setItem("data", list_contaienr.innerHTML);
}
takwat_pyamal = () =>{
   list_contaienr.innerHTML = localStorage.getItem("data");
}
takwat_pyamal();

// lol i really fucked up when i used local_storage for the first time 
// so i'm really excited when this indian guy tried to show me about that, 
// but that was so easy for him by reversing my method lol