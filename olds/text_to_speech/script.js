let speech = new SpeechSynthesisUtterance();

let voices = [];

let voiceSELECT = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () =>{
    // into voices Array 
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
    // select first one as default 

    // get all voices with foreach 
    voices.forEach((voice, i) => (voiceSELECT.options[i] = new Option(voice.name, i)));
};
// change voice as the text change 
voiceSELECT.addEventListener("change", ()=>{
    speech.voice = voices[voiceSELECT.value];
});
// speak the text from the textarea 
document.querySelector("button").onclick =()=>{
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
}