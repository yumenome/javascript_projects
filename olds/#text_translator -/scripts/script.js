const selectTAG = document.querySelectorAll("select");
const tran_BTN = document.querySelector("button");
const fromTAG = document.querySelector(".from_text");
const toTAG = document.querySelector(".to_text");
const exchangeTAG = document.querySelector(".exchange");
const icons = document.querySelectorAll(".row i");

selectTAG.forEach((tag, id) =>{
        //code as paramenter name and index
    for(const code in countries){
        let selected;
        // english as default for form_text
        if(id == 0 && code == "en-US"){
            selected = "selected";
        // hindi as default for to_text
        }else if(id == 1 &&  code == "ja-JP"){
            selected = "selected";
        }
        let option =`<option value="${code}" ${selected}>${countries[code]}</option>`;
        //add options as last element inside select tag
        tag.insertAdjacentHTML("beforeend", option);
    }
});


exchangeTAG.onclick =()=>{
    let tempTEXT = fromTAG.value;
    let temp_lan = selectTAG[0].value;
    fromTAG.value = toTAG.value;
    selectTAG[0].value = selectTAG[1].value;
    toTAG.value = tempTEXT;
    selectTAG[1].value = temp_lan;
}

tran_BTN.onclick =()=>{
    let text = fromTAG.value;
    translateFROM = selectTAG[0].value, //fromselect tag value
    translateTO = selectTAG[1].value;   //toselect tag value
    if(!text) return;
    toTAG.setAttribute("placeholder", "translating...");
    console.log(text, translateFROM, translateTO);
    let apiURL = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFROM}|${translateTO}`;
    fetch(apiURL).then(res => res.json()).then(data =>{
        console.log(data);
        toTAG.value = data.responseData.translatedText;
        toTAG.setAttribute("placeholder", "translating...");
    })
}
icons.forEach(icon =>{
    icon.onclick =({target})=>{
        // console.log(target);
        if(target.classList.contains("fa-copy")){
            if(target.id == "from"){
                navigator.clipboard.writeText(fromTAG.value);
            }else{
                navigator.clipboard.writeText(toTAG.value);
            }
        }else{
            let voice;
            if(target.id == "from"){
                voice = new SpeechSynthesisUtterance(fromTAG.value);
                voice.lang = selectTAG[0].value;
            }else{
                voice = new SpeechSynthesisUtterance(toTAG.value);
                voice.lang = selectTAG[1].value;
            }
            speechSynthesis.speak(voice);
        }
    }
})