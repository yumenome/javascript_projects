const inputBOX = document.querySelector(".input_box textarea");
const sendBTN = document.querySelector(".input_box span");
const chatBOX =document.querySelector(".chat_box");
const startBTN =document.querySelector(".start");
const closeBTN =document.querySelector(".close");


let input_msg;
const api_key = "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";
// origin height 
const original_height = inputBOX.scrollHeight;

create_chat_li = (msg, className) => {
    const chat_li = document.createElement("li");
    chat_li.classList.add("chat", className);
    let chat_content = className === "outgo" ? `<p></p>` : `<span class="material-symbols-outlined">robot_2</span><p></p>`;
    chat_li.innerHTML= chat_content;
    chat_li.querySelector("p").textContent = msg;
    return chat_li;
}

generate_response = (chat_li) =>{
    const api_url = "https://api.openai.com/v1/chat/completions";
    const msg_element = chat_li.querySelector("p");

    const request_option = {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${api_key}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            "messages": [{role: "user", content: input_msg}]
        })
    }
    fetch(api_url, request_option).then(res => res.json()).then(data=>{
        // console.log(data);
        msg_element.textContent = data.choices[0].message.content;
    }).catch((err)=>{
        msg_element.style.color = "red";
        msg_element.style.margin = "10px";
        msg_element.textContent = `お前,ဘာတွေလာမေးနေတာလဲ? \nမဖြေတတ်တော့ဘူး`;
        console.log(err);
    }).finally(()=> chatBOX.scroll(0, chatBOX.scrollHeight));
} 

handle_chat =() =>{
    input_msg = inputBOX.value.trim();
    if(!input_msg) return;
    inputBOX.value= "";
    inputBOX.style.height =`${original_height}px`;
    
    chatBOX.appendChild(create_chat_li(input_msg, "outgo"));
    chatBOX.scroll(0, chatBOX.scrollHeight);

    setTimeout(() => {
        const income_chat_li =create_chat_li("thinking...", "income");
        chatBOX.appendChild(income_chat_li);
        chatBOX.scroll(0, chatBOX.scrollHeight);
        generate_response(income_chat_li);
    }, 500);
}
// increase height as input improve 
inputBOX.addEventListener("input", ()=>{
    inputBOX.style.height =`${inputBOX.scrollHeight}px`;
});
inputBOX.addEventListener("keydown", (e)=>{
    // prevent enter until that was combin with shiftKey 
    if(e.key === "Enter" && !e.shiftKey){
        e.preventDefault();
        handle_chat();
    }
});

sendBTN.addEventListener("click",handle_chat);
startBTN.onclick =()=>{document.body.classList.toggle("show_bot")};
closeBTN.onclick =()=>{document.body.classList.remove("show_bot")};