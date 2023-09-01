const questionTAG = document.getElementById("question");
const answerTAG = document.getElementById("answer");
const nextTAG = document.getElementById("next");


const slides =[
    {
        question: "which is the largest animal in the world?",
        answer: [
            {text: "shark", condi: false},
            {text: "blue whale", condi: true},
            {text: "elephant", condi: false},
            {text: "giraffe", condi: false},
        ]
    },
    {
        question: "which is the smallest country in the world?",
        answer: [
            {text: "vatican", condi: true},
            {text: "bhutan", condi: false},
            {text: "nepal", condi: false},
            {text: "shri lanka", condi: false},
        ]
    },
    {
        question: "which is the largest desert in the world?",
        answer: [
            {text: "kalahari", condi: false},
            {text: "gobi", condi: false},
            {text: "sahara", condi: false},
            {text: "antarctic", condi: true},
        ]
    },
    {
        question: `who is the loneliest person in the world ╥﹏╥?`,
        answer: [
            {text: "u", condi: true},
            {text: "u", condi: true},
            {text: "u", condi: true},
            {text: "u", condi: true},
            
        ]
    },
]

let current_index =0;
let score =0;

starto = () =>{
    current_index=0;
    score=0;
    nextTAG.innerHTML ="next";
    showoff();
}

showoff = () =>{
    restate();
    let current_slide = slides[current_index];
    let slide_no = current_index +1;
    questionTAG.innerHTML = slide_no + ". " + current_slide.question;

    current_slide.answer.forEach(a =>{
        const BTN = document.createElement("button");
        BTN.innerHTML = a.text;
        BTN.classList.add("ans");
        answerTAG.appendChild(BTN);
        console.log(answerTAG);
// just addd condi to the BTN (t/f)
        if(a.condi){
            BTN.dataset.condi = a.condi;
        }

        BTN.addEventListener("click", (e) =>{
            const selected_btn = e.target;
            const corrected = selected_btn.dataset.condi === "true";
            console.log(corrected);
            if(corrected){
                selected_btn.classList.add("yes");
                score ++;
            }else{
                selected_btn.classList.add("boo");
            }
// just take out all the codi form answer array 
// and show the true ans whenever the btn is true or false;
            Array.from(answerTAG.children).forEach(b =>{
                if(b.dataset.condi === "true"){
                    b.classList.add("yes");
                }
                b.disabled ="true";
            });
            nextTAG.style.display = "block";
        });
    });
}
restate = () =>{
    nextTAG.style.display= "none";
    while(answerTAG.firstChild){
        answerTAG.removeChild(answerTAG.firstChild);
    }
}
nextTAG.addEventListener("click", () =>{
    current_index ++;
    nextTAG.innerHTML = "next";
    if(current_index < slides.length){
        showoff();
    }else{
        restate();
        questionTAG.innerHTML = `you scored ${score} out of ${slides.length}!`;
        nextTAG.innerHTML = "try again?";
        nextTAG.style.display ="block";
        current_index = -1;
        score = 0;
    }
})
starto();