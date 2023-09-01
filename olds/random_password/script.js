const pwdTAG = document.getElementById("password");
const cpTAG = document.querySelector(".cp");
const touchTAG = document.querySelector(".touch");
const total = 11;

const upperC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerC = "abcdefghijklmnopqrstuvwxyz";
const num = "1234567890";
const sym = "!@#$%^&*()?><?|/\{}[]";

const allC = upperC + lowerC + num + sym;

create_it = () =>{
    let pwd = "";
    // pwd += upperC[Math.floor(Math.random() * upperC.length)];
    // pwd += lowerC[Math.floor(Math.random() * lowerC.length)];
    // pwd += num[Math.floor(Math.random() * num.length)];
    // pwd += sym[Math.floor(Math.random() * sym.length)];

    while(total > pwd.length){
        pwd += allC[Math.floor(Math.random() * allC.length)];
    }
    pwdTAG.value = pwd;
}
touchTAG.onclick = () =>{
    cpTAG.style.display = "inline";
    pwdTAG.select();
    document.execCommand("copy");
    pwdTAG.blur();
    setTimeout(()=>{
        cpTAG.style.display = "none"},250);
}