const nameERROR = document.getElementById("name_err");
const ph_number_ERROR = document.getElementById("ph_number_err");
const emailERROR = document.getElementById("email_err");
const messageERROR = document.getElementById("message_err");
const  buttonTAG = document.getElementById(".btn");

name_valation =()=>{
    const NAME = document.getElementById("name").value;
    const nameTAG = document.getElementById("name");

    if(NAME.length === 0){
        nameERROR.innerHTML = "name_required!";
        // nameTAG.removeAttribute('name');
        // return false;
    }
    else if(!NAME.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameERROR.innerHTML= "full_name pls";
        nameTAG.removeAttribute('name');
        // return false;
    }else{
    nameERROR.innerHTML= `<i class="fa fa-check-circle"></i>`;
    nameTAG.setAttribute('name','name');    
    // return true;
    }
}

ph_valation =()=>{
    const PH = document.getElementById("ph").value;
    const phTAG = document.getElementById("ph");
    
        if(PH.length === 0){
            ph_number_ERROR.innerHTML = "ph_number_required!";
        }
        else if(!PH.match(/^[0-9]{9}$/) || PH.length !==9){
            ph_number_ERROR.innerHTML="invalid number!";
            phTAG.removeAttribute('name');
        }else{
        ph_number_ERROR.innerHTML = `<i class="fa fa-check-circle"></i>`;
        phTAG.setAttribute('name','ph');   
        //  return true;
        }
}

email_valation =()=>{
    const EMAIL = document.getElementById("email").value;
    const emailTAG = document.getElementById("email");

    if(EMAIL.length === 0){
        emailERROR.innerHTML = "email_required!";
        
    }
    else if(!EMAIL.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
        emailERROR.innerHTML = "invalid email!";
        emailTAG.removeAttribute('name');
    }else{
    emailERROR.innerHTML= `<i class="fa fa-check-circle"></i>`;
    emailTAG.setAttribute('name', 'email');
    }
}
// const alertTAG = document.querySelector("alert_box");
// let alert = document.createElement("div");
// alert.classList.add("pop_up");
// alert.innerHTML= "smth was wrong i can feel it";
// alertTAG.appendChild(alert);
// setTimeout(() =>{
//     alert.classList.addd("off");
// },3000);

// final_validation =()=>{

// if(name_valation() && ph_valation() && email_valation() ){

//     // buttonTAG.style.display= "block";
//     buttonTAG.setAttribute('name', 'submit');
// }

//     }else{

// && ph_valation() && email_valation()
// }
// buttonTAG.onclick =()=>{
//     console
// }