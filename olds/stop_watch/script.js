const stop_watchTAG = document.querySelector(".stop_watch");

const mainTAG =document.querySelector(".main");
const miTAG =document.querySelector(".mi");

const startTAG = document.querySelector(".start");
const keep_onTAG = document.querySelector(".keep_on");
const pauseTAG = document.querySelector(".pause");
const restartTAG = document.querySelector(".restart");

let ms =0, sec =0, min =0, hr =0;

update_time = () =>{
    ms +=1;
    if(ms == 1000){
        ms =0;
        sec +=1;
        if(sec === 60){
            sec =0;
            min +=1;
            if(min === 60){
                min =0;
                hr +=1;
            }
        }
    };
    const secTEXT = sec < 10 ? "0" + sec.toString() : sec;
    const minTEXT = min < 10 ? "0" + min.toString() : min;
    const hrTEXT = hr < 10 ? "0" + hr.toString() : hr;
    mainTAG.textContent= `${hrTEXT}:${minTEXT}:${secTEXT}`;
    miTAG.textContent= ms;
}

let id;

startTAG.onclick = () =>{
    clearInterval(id);
    ms =0, sec =0, min =0, hr =0;
    id = setInterval(update_time, 1);
    console.log(id);
    keep_onTAG.style.display = "none";
    pauseTAG.style.display = "block";
}
keep_onTAG.onclick = () =>{
    clearInterval(id);
    id = setInterval(update_time, 1);
    keep_onTAG.style.display = "none";
    pauseTAG.style.display = "block";
}
pauseTAG.onclick = () =>{
    clearInterval(id);
    keep_onTAG.style.display = "block";
    pauseTAG.style.display = "none";
}
restartTAG.onclick = () =>{
    clearInterval(id);
    ms =0, sec =0, min =0, hr =0;
    id = setInterval(update_time, 1);
    keep_onTAG.style.display = "none";
    pauseTAG.style.display = "block";
}
