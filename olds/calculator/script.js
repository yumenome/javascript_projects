const displayTAG =document.querySelector(".display");
const equalTAG =document.querySelector(".equal");

solve =()=>{
    if(displayTAG.value === ''){
        displayTAG.value = "";
    }else{
        displayTAG.value = eval(displayTAG.value);
    }
}
