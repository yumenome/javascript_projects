const qr_textTAG =document.getElementById("qr_text");
const qr_imgTAG =document.getElementById("qr_img");
const img_boxTAG =document.getElementById("img_box");
const buttonTAG = document.querySelector("button");
const pTAG = document.querySelector("p");
const noti_boxTAG = document.querySelector(".noti_box");

generate = () =>{
    if(qr_textTAG.value.length > 0){
    qr_imgTAG.src = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + qr_textTAG.value;
    img_boxTAG.classList.add("showit");
    }else{
        qr_textTAG.classList.add("error");
        setTimeout(()=>{ qr_textTAG.classList.remove("error")}, 1000);
    }
}
qr_imgTAG.onclick = () =>{
    if(qr_textTAG.style.display = "block"){
    qr_textTAG.style.opacity = "0";
    pTAG.style.opacity = "0";
    buttonTAG.style.opacity = "0";
    }

    let noti = document.createElement("div");
    noti.classList.add("pop_up");
    noti.innerHTML= "take ss one time to use everywhere!";
    noti_boxTAG.appendChild(noti);
    setTimeout(() =>{
        noti.classList.add("off");
    },3000);
}
    // cpTAG.style.display = "inline";
    // navigator.clipboard.readText().then((copiedText) => {
    //     let tme= toString(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data= + ${copiedText}`);
    //     tme.select();
    //     document.execCommand("copy");
    // });
    // qr_imgTAG.blur();
    // setTimeout(()=>{
    //     cpTAG.style.display ="none"},250
    // );
// }