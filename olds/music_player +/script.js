const containerTAG = document.querySelector(".player_container");
const audioTAG = document.querySelector(".audio");
const timeTAG =document.querySelector(".time");

const progress_barTAG = document.querySelector("#progress_bar");
const progressiveTAG = document.querySelector("#progressive");

const play_btnTAG = document.querySelector(".play_btn");
const pause_btnTAG = document.querySelector(".pause_btn");
const previous_btnTAG = document.querySelector(".previous_btn");
const next_btnTAG =document.querySelector(".next_btn");

const songs= [
    {id: "music/1.mp3", name: "W_W"},
    {id: "music/2.mp3", name: "Earthquake"},
    {id: "music/3.mp3", name: "Hourse"},
    {id: "music/4.mp3", name: "Bangarang"},
];

// song on click
for(let i = 0; i< songs.length; i++){
    const songTAG = document.createElement("div");
    songTAG.onclick = () =>{
        index = i;
        playTHIS();
    };
    songTAG.classList.add("songITEM"); 
    songTAG.textContent= `${(i + 1).toString()} ${songs[i].name}`;
    containerTAG.append(songTAG);
}

// duration 
var duration = 0;
var durationTEXT = "00:00"
audioTAG.addEventListener("loadeddata", () =>{
    duration = Math.floor(audioTAG.duration)
    durationTEXT = createTIME(duration);
});
audioTAG.addEventListener("timeupdate", () =>{
    var currentTime = Math.floor(audioTAG.currentTime)
    const currentTEXT =createTIME(currentTime);
    timeTAG.textContent = `${currentTEXT} / ${durationTEXT}`;
    progress_update(currentTime);
});
const createTIME = (total) =>{
    const min = Math.floor(total/ 60);
    const sec = (total % 60);

    const min_text = min < 10 ? "0" + min.toString() : min;
    const sec_text = sec < 10 ? "0" + sec.toString() : sec;
    return min_text + ":" + sec_text;
};

//progressive_bar
const progress_update = (currentTime) =>{
    const progress = (100/duration) * currentTime;
    progressiveTAG.style.width = `${progress.toString()}%`;
}
// progressiveTAG.onchange=()=>{
//     currentTIME=progressiveTAG.value;
// }
//PLAYnPAUSE
var playing = false;
var index = 0;
play_btnTAG.onclick = () =>{
    const currentTIME =Math.floor(audioTAG.currentTime);
    if(currentTIME === 0){
        playTHIS();
    }else{
        audioTAG.play();
        playing = true;
        upadatePLAYnPAUSE();
    }
};
pause_btnTAG.onclick = () =>{
    playing = false;
    audioTAG.pause();
    upadatePLAYnPAUSE();
};

previous_btnTAG.onclick = () =>{
    if(index === 0){
        index = songs.length-1;
    }else{
        index -= 1;
    };
    playTHIS();
};
next_btnTAG.onclick = () =>{
    if(index === songs.length-1){
        index= 0;
    }else{
        index +=1;
    };
    playTHIS();    
};
const playTHIS = () =>{
    // songTAG.style.background = "black"
    // songTAG.style.color = "white"
    audioTAG.src =songs[index].id;
    audioTAG.play();
    playing = true;
    upadatePLAYnPAUSE();

}
const upadatePLAYnPAUSE = () =>{
    if(playing){
        play_btnTAG.style.display = "none";
        pause_btnTAG.style.display = "inline";
    }else{
        play_btnTAG.style.display = "inline";
        pause_btnTAG.style.display = "none";
        
    }
};














// document.querySelector(".next").onclick = () =>{

// }