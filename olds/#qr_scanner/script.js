const containerTAG =document.querySelector(".container");
const formTAG = document.querySelector("form");
const inputTAG = document.querySelector("input");
const infoTAG = document.querySelector("p");
const closeBTN = document.querySelector(".close");
const copyBTN = document.querySelector(".copy");

formTAG.onclick =()=>{ inputTAG.click()};

inputTAG.addEventListener("change", async e =>{
    let file = e.target.files[0];
    console.log(file);
    if(!file) return;
    // making new obj to use as body when sending to api
    let formDATA = new FormData();
    formDATA.append('file', file);
    fetchDATA(file, formDATA)
});

fetchDATA =(file, data)=>{
        infoTAG.innerHTML="scanning qr-code....";
        //send data as body with post method 
        fetch("http://api.qrserver.com/v1/read-qr-code/",{method: 'POST', body: data})
        //get response from it with json format
        .then(res => res.json())
        // .then(result=>{console.log(result)});
        .then(result => {
            result = result[0].symbol[0].data;
            // infoTAG.innerText =result ? "upload qr-code to scan" : "incorrect file type!";
            // incorrect but if that wasn't small file size
            if(!result){
                infoTAG.innerText= `that wasn't qr-code\n try again?`;
                return;
            }
            // if(file.type === "png" || file.type === "jpeg"){
            //     imgTAG.src = URL.createObjectURL(file);
            //     imgTAG.classList.add("half");
            // }
            // console.log(file.type);
            // if(!result) ;
            document.querySelector("textarea").innerText=result;
            document.querySelector(".test").src = URL.createObjectURL(file);
            containerTAG.classList.add("active");
        }).catch(()=>{
            //large file but still incorrect
            infoTAG.innerText= `that wasn't qr-code \n try again?`;
        });
}
        
copyBTN.onclick =()=>{
    let text = document.querySelector("textarea").textContent;
    navigator.clipboard.writeText(text);
    copyBTN.style.background = "transparent";
    copyBTN.style.color = "#fff";
    copyBTN.innerText="copied!";
}

closeBTN.onclick =()=>{
    containerTAG.classList.remove("active");
}
